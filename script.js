const romanMap = new Map([
    ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
    ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
    ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
]);

function validateInteger(num) {
    if (typeof num !== "number" || !Number.isInteger(num)) {
        throw new Error("Invalid integer input");
    }
    if (num < 1 || num > 3999) {
        throw new Error("Number out of range (1-3999)");
    }
}

function validateRoman(roman) {
    if (typeof roman !== "string") {
        throw new Error("Invalid Roman numeral input");
    }
    
    if (!/^[IVXLCDM]+$/i.test(roman)) {
        throw new Error("Invalid characters in Roman numeral");
    }
    
    const validPattern = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    if (!validPattern.test(roman.toUpperCase())) {
        throw new Error("Invalid Roman numeral format");
    }
}

function toRoman(num) {
    validateInteger(num);
    let result = "";
    for (const [key, value] of romanMap) {
        while (num >= value) {
            result += key;
            num -= value;
        }
    }
    return result;
}

function fromRoman(roman) {
    validateRoman(roman);
    roman = roman.toUpperCase();
    let total = 0;
    
    for (let i = 0; i < roman.length; i++) {
        const current = romanMap.get(roman[i]);
        const next = romanMap.get(roman[i + 1]);
        
        if (current === undefined) {
            throw new Error(`Invalid Roman numeral character: ${roman[i]}`);
        }
        
        if (next && current < next) {
            total += next - current;
            i++;
        } else {
            total += current;
        }
    }
    
    return total;
}

function convert() {
    const numInput = document.getElementById("number-input");
    const romanInput = document.getElementById("roman-input");
    const result = document.getElementById("result");
    
    result.classList.remove("error");

    try {
        if (numInput.value) {
            const num = parseInt(numInput.value);
            if (isNaN(num) || num < 1 || num > 3999) throw new Error("INVALID DIGITAL SIGNAL");
            romanInput.value = toRoman(num);
            result.textContent = `TRANSLATION: ${num} → ${romanInput.value}`;

            // Track conversion to roman
            gtag('event', 'number_to_roman', {
                'integer_value': num,
                'roman_result': romanResult
            });
            
        } else if (romanInput.value) {
            const roman = romanInput.value.trim().toUpperCase();
            if (!/^M*(CM)?(CD)?D?(XC)?(XL)?L?X{0,3}(IX)?(IV)?V?I{0,3}$/.test(roman)) {
                throw new Error("CORRUPTED ANCIENT CODE");
            }
            numInput.value = fromRoman(roman);
            result.textContent = `DECRYPTION: ${roman} → ${numInput.value}`;

            // Track conversion to integer
            gtag('event', 'roman_to_number', {
                'roman_value': roman,
                'integer_result': intResult
            });
        }
    } catch (error) {
        result.textContent = `ERROR: ${error.message}`;
        result.classList.add("error");

        gtag('event', 'conversion_error', {
            'error_message': error.message
        });
    }
}

document.getElementById("number-input").addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, "");
    if (this.value) document.getElementById("roman-input").value = "";
});

document.getElementById("roman-input").addEventListener("input", function() {
    this.value = this.value.toUpperCase().replace(/[^IVXLCDM]/g, "");
    if (this.value) document.getElementById("number-input").value = "";
});

gtag('event', 'roman_to_number', {
    'intNumber': numInput.value
});

gtag('event', 'number_to_roman', {
    'romanNumber': romanInput.value
});

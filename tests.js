const expect = chai.expect;

describe("Roman Numeral Converter Tests", function() {
  // Integer to Roman Tests
  describe("Integer to Roman Conversion", function() {
    it("TC-1: convertIntegerToRoman(1) => 'I'", function() {
      expect(toRoman(1)).to.equal("I");
    });

    it("TC-2: convertIntegerToRoman(2) => 'II'", function() {
      expect(toRoman(2)).to.equal("II");
    });

    it("TC-3: convertIntegerToRoman(4) => 'IV'", function() {
      expect(toRoman(4)).to.equal("IV");
    });

    it("TC-4: convertIntegerToRoman(9) => 'IX'", function() {
      expect(toRoman(9)).to.equal("IX");
    });

    it("TC-5: convertIntegerToRoman(40) => 'XL'", function() {
      expect(toRoman(40)).to.equal("XL");
    });

    it("TC-6: convertIntegerToRoman(90) => 'XC'", function() {
      expect(toRoman(90)).to.equal("XC");
    });

    it("TC-7: convertIntegerToRoman(400) => 'CD'", function() {
      expect(toRoman(400)).to.equal("CD");
    });

    it("TC-8: convertIntegerToRoman(900) => 'CM'", function() {
      expect(toRoman(900)).to.equal("CM");
    });

    it("TC-9: convertIntegerToRoman(1234) => 'MCCXXXIV'", function() {
      expect(toRoman(1234)).to.equal("MCCXXXIV");
    });

    it("TC-10: convertIntegerToRoman(3999) => 'MMMCMXCIX'", function() {
      expect(toRoman(3999)).to.equal("MMMCMXCIX");
    });

    it("TC-11: convertIntegerToRoman(3998) => 'MMMCMXCVIII'", function() {
      expect(toRoman(3998)).to.equal("MMMCMXCVIII");
    });

    it("TC-12: convertIntegerToRoman(0) => Error", function() {
      expect(() => toRoman(0)).to.throw("Number out of range (1-3999)");
    });

    it("TC-13: convertIntegerToRoman(2.5) => Error", function() {
      expect(() => toRoman(2.5)).to.throw("Invalid integer input");
    });

    it("TC-14: convertIntegerToRoman(2/5) => Error", function() {
      expect(() => toRoman(2/5)).to.throw("Invalid integer input");
    });

    it("TC-15: convertIntegerToRoman('IV') => Error", function() {
      expect(() => toRoman("IV")).to.throw("Invalid integer input");
    });

    it("TC-16: convertIntegerToRoman(-5) => Error", function() {
      expect(() => toRoman(-5)).to.throw("Number out of range (1-3999)");
    });

    it("TC-17: convertIntegerToRoman(4000) => Error", function() {
      expect(() => toRoman(4000)).to.throw("Number out of range (1-3999)");
    });

    it("TC-18: convertIntegerToRoman(9999) => Error", function() {
      expect(() => toRoman(9999)).to.throw("Number out of range (1-3999)");
    });
  });

  // Roman to Integer Tests
  describe("Roman to Integer Conversion", function() {
    it("TC-19: convertRomanToInteger('I') => 1", function() {
      expect(fromRoman("I")).to.equal(1);
    });

    it("TC-20: convertRomanToInteger('IV') => 4", function() {
      expect(fromRoman("IV")).to.equal(4);
    });

    it("TC-21: convertRomanToInteger('IX') => 9", function() {
      expect(fromRoman("IX")).to.equal(9);
    });

    it("TC-22: convertRomanToInteger('XL') => 40", function() {
      expect(fromRoman("XL")).to.equal(40);
    });

    it("TC-23: convertRomanToInteger('XC') => 90", function() {
      expect(fromRoman("XC")).to.equal(90);
    });

    it("TC-24: convertRomanToInteger('CD') => 400", function() {
      expect(fromRoman("CD")).to.equal(400);
    });

    it("TC-25: convertRomanToInteger('CM') => 900", function() {
      expect(fromRoman("CM")).to.equal(900);
    });

    it("TC-26: convertRomanToInteger('MCCXXXIV') => 1234", function() {
      expect(fromRoman("MCCXXXIV")).to.equal(1234);
    });

    it("TC-27: convertRomanToInteger('MMMCMXCIX') => 3999", function() {
      expect(fromRoman("MMMCMXCIX")).to.equal(3999);
    });

    it("TC-28: convertRomanToInteger('IIII') => Error", function() {
      expect(() => fromRoman("IIII")).to.throw("Invalid Roman numeral format");
    });

    it("TC-29: convertRomanToInteger('IL') => Error", function() {
      expect(() => fromRoman("IL")).to.throw("Invalid Roman numeral format");
    });

    it("TC-30: convertRomanToInteger('XQ') => Error", function() {
      expect(() => fromRoman("XQ")).to.throw("Invalid characters in Roman numeral");
    });

    it("TC-31: convertRomanToInteger('HEYIMTESTING') => Error", function() {
      expect(() => fromRoman("HEYIMTESTING")).to.throw("Invalid characters in Roman numeral");
    });

    it("TC-32: convertRomanToInteger('MLXLMX') => Error", function() {
      expect(() => fromRoman("MLXLMX")).to.throw("Invalid Roman numeral format");
    });

    it("TC-33: convertRomanToInteger('MMMMMMM') => Error", function() {
      expect(() => fromRoman("MMMMMMM")).to.throw("Invalid Roman numeral format");
    });

    it("TC-34: convertRomanToInteger('3') => Error", function() {
      expect(() => fromRoman("3")).to.throw("Invalid characters in Roman numeral");
    });

    it("TC-35: convertRomanToInteger('II') => 2", function() {
      expect(fromRoman("II")).to.equal(2);
    });
  });
  describe("AI-Generated Test Cases", function() {
    describe("Integer to Roman Conversion", function() {
      it("AI-TC1: convertIntegerToRoman(3) => 'III'", function() {
        expect(toRoman(3)).to.equal("III");
      });

      it("AI-TC2: convertIntegerToRoman(58) => 'LVIII'", function() {
        expect(toRoman(58)).to.equal("LVIII");
      });

      it("AI-TC3: convertIntegerToRoman(1994) => 'MCMXCIV'", function() {
        expect(toRoman(1994)).to.equal("MCMXCIV");
      });

      it("AI-TC4: convertIntegerToRoman(0) => Error", function() {
        expect(() => toRoman(0)).to.throw("Number out of range (1-3999)");
      });

      it("AI-TC5: convertIntegerToRoman(4500) => Error", function() {
        expect(() => toRoman(4500)).to.throw("Number out of range (1-3999)");
      });
    });

    describe("Roman to Integer Conversion", function() {
      it("AI-TC6: convertRomanToInteger('MCMXCIV') => 1994", function() {
        expect(fromRoman("MCMXCIV")).to.equal(1994);
      });

      it("AI-TC7: convertRomanToInteger('LVIII') => 58", function() {
        expect(fromRoman("LVIII")).to.equal(58);
      });

      it("AI-TC8: convertRomanToInteger('ABC') => Error", function() {
        expect(() => fromRoman("ABC")).to.throw("Invalid characters in Roman numeral");
      });

      it("AI-TC9: convertRomanToInteger('XLVII') => 47", function() {
        expect(fromRoman("XLVII")).to.equal(47);
      });

      it("AI-TC10: convertRomanToInteger('XM') => Error", function() {
        expect(() => fromRoman("XM")).to.throw("Invalid Roman numeral format");
      });
    });
  });
});
import canMove from ".";
import { describe, expect } from "@jest/globals";
import "@testing-library/jest-dom";

describe("Valid chess moves", () => {
  it("should throw an error if an invalid start position is entered", () => {
    expect(() => canMove("pawn", "A9", "B8")).toThrowError();
  });
  it("should throw an error if an invalid end position is entered", () => {
    expect(() => canMove("pawn", "A8", "B9")).toThrowError();
  });
  it("should throw an error if an invalid piece is entered", () => {
    expect(() => canMove("castle", "A8", "B8")).toThrowError();
  });
  describe("Pawns", () => {
    describe("if white: ", () => {
      it("should be able to move one square forwards", () => {
        const result = canMove("pawn", "A2", "A3");
        expect(result).toBe(true);
      });
      it("should be able to move two squares forwards on first move", () => {
        const result = canMove("pawn", "A2", "A4");
        expect(result).toBe(true);
      });
      it("should not be able to move two squares forwards after the first move", () => {
        const result = canMove("pawn", "A3", "A5");
        expect(result).toBe(false);
      });
      it("should not be able to move more than two squares forwards", () => {
        const result = canMove("pawn", "A3", "A6");
        expect(result).toBe(false);
      });
      it("should not be able to move backwards", () => {
        const result = canMove("pawn", "A3", "A2");
        expect(result).toBe(false);
      });
      it("should not be able to move diagonally", () => {
        const result = canMove("pawn", "A3", "B4");
        expect(result).toBe(false);
      });
    });
    describe("if black: ", () => {
      it("should be able to move one square forwards", () => {
        const result = canMove("pawn", "A7", "A6", "black");
        expect(result).toBe(true);
      });
      it("should be able to move two squares forwards on first move", () => {
        const result = canMove("pawn", "A7", "A5", "black");
        expect(result).toBe(true);
      });
      it("should not be able to move two squares forwards after the first move", () => {
        const result = canMove("pawn", "A6", "A4", "black");
        expect(result).toBe(false);
      });
      it("should not be able to move more than two squares forwards", () => {
        const result = canMove("pawn", "A6", "A2", "black");
        expect(result).toBe(false);
      });
      it("should not be able to move backwards", () => {
        const result = canMove("pawn", "A6", "A8", "black");
        expect(result).toBe(false);
      });
      it("should not be able to move diagonally", () => {
        const result = canMove("pawn", "A7", "B6", "black");
        expect(result).toBe(false);
      });
    });
  });

  describe("Rooks", () => {
    it("should be able to move one square forwards", () => {
      const result = canMove("rook", "A2", "A3");
      expect(result).toBe(true);
    });
    it("should be able to move one square right", () => {
      const result = canMove("rook", "A2", "B2");
      expect(result).toBe(true);
    });

    it("should not be able to move one square diagonally", () => {
      const result = canMove("rook", "A2", "B3");
      expect(result).toBe(false);
    });
    it("should be able to move 5 squares forwards", () => {
      const result = canMove("rook", "A2", "A7");
      expect(result).toBe(true);
    });
    it("should be able to move 5 squares right", () => {
      const result = canMove("rook", "A2", "F2");
      expect(result).toBe(true);
    });

    it("should be able to move backwards", () => {
      const result = canMove("rook", "A7", "A5");
      expect(result).toBe(true);
    });
    it("should be able to move left", () => {
      const result = canMove("rook", "F2", "B2");
      expect(result).toBe(true);
    });
  });

  describe("Bishops", () => {
    it("should be able to move diagonally forwards to the right", () => {
      const result = canMove("bishop", "A2", "B3");
      expect(result).toBe(true);
    });
    it("should be able to move diagonally forwards to the left", () => {
      const result = canMove("bishop", "D5", "C6");
      expect(result).toBe(true);
    });
    it("should be able to move diagonally backwards to the left", () => {
      const result = canMove("bishop", "D5", "C4");
      expect(result).toBe(true);
    });
    it("should be able to move diagonally backwards to the right", () => {
      const result = canMove("bishop", "D5", "E4");
      expect(result).toBe(true);
    });
    it("should not be able to move straight ahead", () => {
      const result = canMove("bishop", "D5", "D6");
      expect(result).toBe(false);
    });
    it("should not be able to move straight backwards", () => {
      const result = canMove("bishop", "D5", "D3");
      expect(result).toBe(false);
    });
    it("should not be able to move left", () => {
      const result = canMove("bishop", "D5", "B5");
      expect(result).toBe(false);
    });
    it("should not be able to move right", () => {
      const result = canMove("bishop", "D5", "F5");
      expect(result).toBe(false);
    });
    it("should not be able to move anywhere else", () => {
      const result = canMove("bishop", "D5", "G3");
      expect(result).toBe(false);
    });
  });

  describe("Kings", () => {
    it("should be able to move one space forwards", () => {
      const result = canMove("king", "D5", "D6");
      expect(result).toBe(true);
    });
    it("should be able to move one space backwards", () => {
      const result = canMove("king", "D5", "D4");
      expect(result).toBe(true);
    });
    it("should be able to move one space left", () => {
      const result = canMove("king", "D5", "C5");
      expect(result).toBe(true);
    });
    it("should be able to move one space right", () => {
      const result = canMove("king", "D5", "E5");
      expect(result).toBe(true);
    });

    it("should be able to move one space diagonally right backwards", () => {
      const result = canMove("king", "D5", "E4");
      expect(result).toBe(true);
    });
    it("should be able to move one space diagonally right forwards", () => {
      const result = canMove("king", "D5", "E6");
      expect(result).toBe(true);
    });
    it("should be able to move one space diagonally left forwards", () => {
      const result = canMove("king", "D5", "C6");
      expect(result).toBe(true);
    });
    it("should be able to move one space diagonally left backwards", () => {
      const result = canMove("king", "D5", "C4");
      expect(result).toBe(true);
    });

    it("should not be able to move more than once space forwards", () => {
      const result = canMove("king", "D5", "D7");
      expect(result).toBe(false);
    });
    it("should not be able to move more than once space backwards", () => {
      const result = canMove("king", "D5", "D3");
      expect(result).toBe(false);
    });
    it("should not be able to move more than once space diagonally", () => {
      const result = canMove("king", "F5", "D3");
      expect(result).toBe(false);
    });
  });

  describe("Knights", () => {
    it("should be able to move in an L shape, two steps backwards, one to the left", () => {
      const result = canMove("knight", "D4", "C2");
      expect(result).toBe(true);
    });
    it("should be able to move in an L shape, two steps backwards, one to the right", () => {
      const result = canMove("knight", "D4", "E2");
      expect(result).toBe(true);
    });

    it("should be able to move in an L shape, two steps to the left, one step backwards", () => {
      const result = canMove("knight", "D4", "B3");
      expect(result).toBe(true);
    });

    it("should be able to move in an L shape, two steps to the right, one step backwards", () => {
      const result = canMove("knight", "D4", "F3");
      expect(result).toBe(true);
    });

    it("should be able to move in an L shape, two steps to the left, one step forwards", () => {
      const result = canMove("knight", "D4", "B5");
      expect(result).toBe(true);
    });
    it("should be able to move in an L shape, two steps to the right, one step forwards", () => {
      const result = canMove("knight", "D4", "F5");
      expect(result).toBe(true);
    });

    it("should be able to move in an L shape, two steps forwards, one step to the left", () => {
      const result = canMove("knight", "D4", "C6");
      expect(result).toBe(true);
    });

    it("should be able to move in an L shape, two steps forwards, one step to the right", () => {
      const result = canMove("knight", "D4", "E6");
      expect(result).toBe(true);
    });

    it("should not be able to move directly forwards", () => {
      const result = canMove("knight", "D4", "D5");
      expect(result).toBe(false);
    });

    it("should not be able to move directly backwards", () => {
      const result = canMove("knight", "D4", "D2");
      expect(result).toBe(false);
    });
  });

  describe("Queens", () => {
    it("should be able to move straight forwards", () => {
      const result = canMove("queen", "D2", "D8");
      expect(result).toBe(true);
    });
    it("should be able to move straight backwards", () => {
      const result = canMove("queen", "D8", "D5");
      expect(result).toBe(true);
    });

    it("should be able to move straight left", () => {
      const result = canMove("queen", "D5", "A5");
      expect(result).toBe(true);
    });
    it("should be able to move straight right", () => {
      const result = canMove("queen", "D5", "H5");
      expect(result).toBe(true);
    });
    it("should be able to move diagonally forwards left", () => {
      const result = canMove("queen", "D4", "B6");
      expect(result).toBe(true);
    });
    it("should be able to move diagonally forwards right", () => {
      const result = canMove("queen", "D4", "H8");
      expect(result).toBe(true);
    });

    it("should be able to move diagonally backwards left", () => {
      const result = canMove("queen", "D4", "B2");
      expect(result).toBe(true);
    });

    it("should be able to move diagonally backwards right", () => {
      const result = canMove("queen", "D4", "G1");
      expect(result).toBe(true);
    });
    it("should not be able to move anywhere else", () => {
      const result = canMove("queen", "D6", "E8");
      expect(result).toBe(false);
    });
  });
});

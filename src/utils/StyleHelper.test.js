import StyleHelper from "./StyleHelper";
import { describe, it, expect } from "vitest";

describe("StyleHelper", () => {
  describe("extractStyleData", () => {
    it("should return null if no style is provided", () => {
      expect(StyleHelper.extractStyleData(null)).toBeNull();
    });

    it("should return webStyle object if no actions are provided", () => {
      const style = { webStyle: { "text-align": "center" } };
      expect(StyleHelper.extractStyleData(style)).toEqual({
        webStyle: { textAlign: "center" },
      });
    });

    it("should return webStyle and actions objects if both are provided", () => {
      const style = {
        webStyle: { "text-align": "center" },
        actions: { onHover: { "font-size": "20px" } },
      };
      const expectedActions = {
        onMouseEnter: expect.any(Function),
        onMouseLeave: expect.any(Function),
      };
      expect(StyleHelper.extractStyleData(style)).toEqual({
        webStyle: { textAlign: "center" },
        actions: expectedActions,
      });
    });
  });

  describe("clearWebStyles", () => {
    it("should return null if no webStyle is provided", () => {
      expect(StyleHelper.clearWebStyles(null)).toBeNull();
    });

    it("should return a new object with CSS properties converted to camelCase", () => {
      const webStyle = { "text-align": "center", "font-size": "20px" };
      expect(StyleHelper.clearWebStyles(webStyle)).toEqual({
        textAlign: "center",
        fontSize: "20px",
      });
    });
  });

  describe("clearActionsObject", () => {
    it("should return null if no actions are provided", () => {
      expect(StyleHelper.clearActionsObject(null)).toBeNull();
    });

    it("should return a new object with onHover action replaced with onMouseEnter and onMouseLeave", () => {
      const actions = { onHover: { "font-size": "20px" } };
      const expectedActions = {
        onMouseEnter: expect.any(Function),
        onMouseLeave: expect.any(Function),
      };
      expect(StyleHelper.clearActionsObject(actions)).toEqual(expectedActions);
    });

    it("should return a new object with other actions unchanged", () => {
      const actions = { onClick: { "font-size": "20px" } };
      const expectedActions = {
        onClick: expect.any(Function),
      };
      expect(StyleHelper.clearActionsObject(actions)).toEqual(expectedActions);
    });
  });
});

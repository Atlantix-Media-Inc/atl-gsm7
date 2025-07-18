import encodeGSM7 from "./index";

describe("encodeGSM7", () => {
  it("should encode a string A", () => {
    const originalMessage = "ĂŃĎŘĒŞ alcaraz";
    const encodedMessage = encodeGSM7(originalMessage);
    expect(encodedMessage).toBe("ANDRÉS alcaraz");
  });

  it("should encode a string B", () => {
    const originalMessage = "PĂŘimŁ donga";
    const encodedMessage = encodeGSM7(originalMessage);
    expect(encodedMessage).toBe("PARimL donga");
  });

  it("should encode a string C", () => {
    const originalMessage = "PǻŘimŁ donga";
    const encodedMessage = encodeGSM7(originalMessage);
    expect(encodedMessage).toBe("PRimL donga");
  });

  it("should encode a string D", () => {
    const originalMessage = "Regular text";
    const encodedMessage = encodeGSM7(originalMessage);
    expect(encodedMessage).toBe(originalMessage);
  });

  it("should encode a string D", () => {
    const originalMessage = "Regular text";
    const encodedMessage = encodeGSM7(originalMessage, false);
    expect(encodedMessage).toBe(originalMessage);
  });
});

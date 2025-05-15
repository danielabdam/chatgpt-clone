import InputPrompt from "../../src/models/input-prompt.js";

describe("InputPrompt Model", () => {
  it("deve instanciar corretamente com prompt", () => {
    const obj = new InputPrompt({ prompt: "teste" });
    expect(obj.prompt).toBe("teste");
  });
});

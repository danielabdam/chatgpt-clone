import { getClient, getDefaultModel } from "../../src/controllers/llm-provider.js";

describe("LLM Provider", () => {
  it("deve retornar cliente OpenAI por padrão", () => {
    process.env.LLM_PROVIDER = "openai";
    process.env.OPENAI_API_KEY = "fake-key";
    expect(() => getClient()).not.toThrow();
  });

  it("deve retornar cliente DeepSeek se provider for deepseek", () => {
    process.env.LLM_PROVIDER = "deepseek";
    process.env.DEEPSEEK_API_KEY = "fake-key";
    expect(() => getClient("deepseek")).not.toThrow();
  });

  it("deve lançar erro para provider inválido", () => {
    expect(() => getClient("invalido")).toThrow();
  });

  it("getDefaultModel retorna modelo correto por provider", () => {
    expect(getDefaultModel("openai")).toBe("gpt-4o-mini");
    expect(getDefaultModel("deepseek")).toBe("deepseek-chat");
  });
});

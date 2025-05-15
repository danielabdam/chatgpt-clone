import createOpenAI, { MODELS as OPENAI_MODELS } from "../../src/config/openai.js";
import createDeepSeek, { MODELS as DEEPSEEK_MODELS } from "../../src/config/deepSeek.js";

const PROVIDERS = [
  {
    name: "OpenAI",
    create: createOpenAI,
    MODELS: OPENAI_MODELS,
    envKey: "OPENAI_API_KEY"
  },
  {
    name: "DeepSeek",
    create: createDeepSeek,
    MODELS: DEEPSEEK_MODELS,
    envKey: "DEEPSEEK_API_KEY"
  }
];

describe("LLM Config (OpenAI & DeepSeek)", () => {
  for (const provider of PROVIDERS) {
    describe(provider.name, () => {
      it(`deve lançar erro se ${provider.envKey} não estiver definida`, () => {
        const old = process.env[provider.envKey];
        delete process.env[provider.envKey];
        expect(() => provider.create()).toThrow();
        process.env[provider.envKey] = old;
      });

      it(`deve criar cliente ${provider.name} se ${provider.envKey} estiver definida`, () => {
        process.env[provider.envKey] = "fake-key";
        expect(() => provider.create()).not.toThrow();
      });

      it("MODELS.chat deve conter modelos válidos", () => {
        expect(Array.isArray(provider.MODELS.chat)).toBe(true);
        expect(provider.MODELS.chat.length).toBeGreaterThan(0);
      });
    });
  }
});

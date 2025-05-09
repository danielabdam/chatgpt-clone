import createOpenAI from "./config/openai.js";
import createDeepSeek from "./config/deepSeek.js";

/** Registre novos provedores aqui */
const factories = {
  openai: createOpenAI,
  deepseek: createDeepSeek,
  // local: createLocal
};

/** Obtém o cliente solicitado */
export function getClient(provider = process.env.LLM_PROVIDER || "openai") {
  const key = provider.trim().toLowerCase();
  const factory = factories[key];
  if (!factory) throw new Error(`LLM provider '${provider}' não suportado`);
  return factory();
}

/** Modelo default por provedor */
export function getDefaultModel(provider) {
  return provider === "deepseek" ? "deepseek-chat" : "gpt-4o-mini";
}

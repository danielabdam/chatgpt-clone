import "dotenv/config";
import OpenAI from "openai";
import { fileURLToPath } from "url";
import path from "path";

/** Modelos autorizados */
export const MODELS = {
  chat: ["gpt-4o-mini", "gpt-4o", "gpt-3.5-turbo"],
  embeddings: ["text-embedding-3-small", "text-embedding-3-large"]
};

let cached;

/** Cria (ou devolve) o cliente OpenAI */
export default function createOpenAI() {
  if (cached) return cached;

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("Env var OPENAI_API_KEY não definida");

  cached = new OpenAI({ apiKey });          // baseURL default
  return cached;
}

import "dotenv/config"; 
import OpenAI from "openai";
import { fileURLToPath } from "url";
import path from "path";

/** Modelos DeepSeek */
export const MODELS = {
  chat: ["deepseek-chat", "deepseek-r1"]
};

let cached;

/** Cria (ou devolve) o cliente DeepSeek */
export default function createDeepSeek() {
  if (cached) return cached;

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) throw new Error("Env var DEEPSEEK_API_KEY não definida");

  cached = new OpenAI({
    apiKey,
    baseURL: process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com"
  });
  return cached;
}

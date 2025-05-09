import { getClient, getDefaultModel } from "../llm-provider.js";
import { MODELS as OPENAI_MODELS } from "../config/openai.js";
import { MODELS as DEEPSEEK_MODELS } from "../config/deepSeek.js";

const modelMap = {
  openai: OPENAI_MODELS.chat,
  deepseek: DEEPSEEK_MODELS.chat
};

export default {
  async sendText(req, res) {
    try {
      const {
        prompt,
        provider = process.env.LLM_PROVIDER || "openai",
        model      // opcional
      } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: "Campo 'prompt' é obrigatório." });
      }

      const llm = getClient(provider);

      const chosenModel =
        model || getDefaultModel(provider) || modelMap[provider]?.[0];

      const completion = await llm.chat.completions.create({
        model: chosenModel,
        messages: [{ role: "user", content: prompt }],
        temperature: 1,
        max_tokens: 2048
      });

      res.json({ data: completion.choices[0].message.content });
    } catch (err) {
      const message =
        err?.response?.data?.error?.message ||
        err.message ||
        "Erro interno no servidor";
      res.status(400).json({ error: message });
    }
  }
};

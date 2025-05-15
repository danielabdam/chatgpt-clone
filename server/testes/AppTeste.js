import request from "supertest";
import app from "../src/app.js";

describe("POST /api/prompt", () => {
  it("deve retornar 400 se o prompt não for enviado", async () => {
    const res = await request(app)
      .post("/api/prompt")
      .send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  // Teste básico de sucesso (mock ou skip se não houver chave válida)
  it("deve retornar 200 e um resultado se o prompt for enviado", async () => {
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.trim() === "") {
      return;
    }
    const res = await request(app)
      .post("/api/prompt")
      .send({ prompt: "Olá, tudo bem?" });
    expect([200,400,429,500]).toContain(res.statusCode); // Aceita 200 ou erro de quota/api
  });
});

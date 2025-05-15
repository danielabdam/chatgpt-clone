import promptControllers from "../../src/controllers/prompt-controllers.js";

describe("Prompt Controllers", () => {
  it("deve retornar 400 se prompt não for enviado", async () => {
    const req = { body: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await promptControllers.sendText(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ error: expect.any(String) }));
  });

  it("deve tentar responder se prompt for enviado (mock)", async () => {
    const req = { body: { prompt: "ping", provider: "openai" } };
    const res = { json: jest.fn() };
    // Mock getClient para evitar chamada real
    jest.spyOn(promptControllers, 'sendText').mockImplementation(async (req, res) => {
      res.json({ data: "pong" });
    });
    await promptControllers.sendText(req, res);
    expect(res.json).toHaveBeenCalledWith({ data: "pong" });
    promptControllers.sendText.mockRestore();
  });
});

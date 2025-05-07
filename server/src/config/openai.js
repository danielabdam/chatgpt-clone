import OpenAI from "openai";

module.exports = class openai {
    static OpenAI(){const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });
      return openai;
}
    static textCompletion({prompt}){

        return {
            model: "gpt-4.1",
            input: `${prompt}`,
            text: {
              "format": {
                "type": "text"
              }
            },
            reasoning: {},
            tools: [],
            temperature: 1,
            max_output_tokens: 2048,
            top_p: 1,
            store: true
          };
    }
}


const response = await openai.responses.create()
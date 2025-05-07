const inputPrompt = require("../models/input-prompt");
const openai = require("../config/openai");
const inputPrompt = require("../models/input-prompt");

module.exports = {
    async sendtext(req, res){
        const openaiAPI = openai()
        const inputmodel = new inputPrompt(req.body)

        try {
        const response = await openaiAPI.creatCompletion(openai.textcompletion(inputmodel)
        )
        return res.send(200).json({
            sucess:true,
            data:response.data.choices[0].text
        })
        } catch(error){
            return res.status(400).json({
                sucess: false,
                error: error.response ? error.response : "Tem um erro no servidor"
            })

        }
    }
}
import { CaDataModel } from "../schemas/caArticleSchema.js";


export const caController = async (req, res) => {
    console.log('Save process started... ');
    
    try {
        const newArticle = req.body
        CaDataModel.create(newArticle)
        console.log("CA-Article Saved!")
    } catch (error) {
        res.send("ERROR:", error)
    }
}


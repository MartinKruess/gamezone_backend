import { CaDataModel } from "../schemas/caArticleSchema.js";

export const caLoadController = async (req, res) => {
    console.log('Loading process started... ');
    
    try {
        const allCaArticles = await CaDataModel.find()
        console.log("allArticles", allCaArticles)
        res.send(allCaArticles)
    } catch (error) {
        res.send("ERROR:", error)
    }
}
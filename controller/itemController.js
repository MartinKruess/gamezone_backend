import ItemModel from "../schemas/itemSchema.js";

export const itemController = async (req, res) => {
    console.log('Upload Merch... ');
    
    try {
        console.log("body", req.body)
        const item = req.body;
        console.log("ITEM", item)
        await ItemModel(item).save();
        res.send("gesendet")
    } catch (error) {
        res.send("ERROR:", error)
    }
}
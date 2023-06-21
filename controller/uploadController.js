import ItemModel from "../schemas/itemSchema.js";

export const uploadController = async (req, res) => {
    console.log('Loading Merch... ');
    
    try {
        const merchItems = await ItemModel.find({})
        console.log("merchItems", merchItems)
        res.send(merchItems)
    } catch (error) {
        res.send("ERROR:", error)
    }
}
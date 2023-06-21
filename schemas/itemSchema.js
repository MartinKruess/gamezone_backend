import mongoose from 'mongoose';

    const string = {
        type: String,
        default: '',
        // required: true
    }

    const number = {
        type: Number,
        default: 0,
        // required: true
    }

    export const itemSchema = mongoose.Schema({
        title: string,
        description: string,
        wash: string,
        dry: string,
        group: string,
        brand: string,
        creator: string,
        type: string,
        gender: string,
        price: number,
        image: string,
        url: string,
        sells: number,
        drachenmünzen: number,
    });

const ItemModel = mongoose.model('shopitems', itemSchema);
export default ItemModel
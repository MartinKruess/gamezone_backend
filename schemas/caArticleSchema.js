import mongoose from 'mongoose';

    const string = {
        type: String,
    }

    const number = {
        type: Number,
    }

    const CA_ArticleSchema = mongoose.Schema({
        title: string,
        date: string,
        description: string,
        paragraphs: {
            type: Array,
        }
    });

export const CaDataModel = mongoose.model('caarticles', CA_ArticleSchema);
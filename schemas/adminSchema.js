import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export const AdminDataModel = mongoose.model('admin', adminSchema);
import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema(
    {
        _id:{
            type: mongoose.Schema.Types.ObjectId,
            auto: true
        },
        user_id :{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        type: {
            enum : ['car', 'bike'],
            default: 'car',
        },
        brand :{
            type: String,
            required: true
        },
        model :{
            type: String,
            required: true
        },
        number_plate :{
            type: String,
            required: true,
            unique: true
        },
        year :{
            type: Number,
            required: true
        },
    },
    { timestamps: true }
)


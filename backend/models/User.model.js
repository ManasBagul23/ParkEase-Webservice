import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        phone:{
            type: int,
            required: true,
            unique: true,
            trim: true,
            index: true,
        },
        role:{
            type: String,
            enum: ["consumer", "provider"],
            default: "consumer",
        },
        profile_pic:{
            default: "https://res.cloudinary.com/dz1qj3x8h/image/upload/v1709301234/avatar.png",
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);


export { userSchema as User };
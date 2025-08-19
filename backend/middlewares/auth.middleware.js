import { ApiError } from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { User } from '../models/user.model.js';
import jwt from "jsonwebtoken"


export const verifyToken = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.access_token || req.headers("Authorization")?.replace("Bearer", "")

        if(!token){
            throw new ApiError(401, "You are not authenticated")
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decoded?._id).select("-password -refreshtoken")

        if(!user){
            throw new ApiError(404, "User not found")
        }

        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error.message || "You are not authenticated")
    }
});
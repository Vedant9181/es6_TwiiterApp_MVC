import mongoose from "mongoose";

export const getTweetsByIdManualValidator = async (req,res,next) => {
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!isValidId) {
        return res.status(400).json({
            message: "Invalid tweet ID",
            success: false,
        });
    }

    next();
}
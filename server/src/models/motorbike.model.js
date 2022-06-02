import mongoose from "mongoose"
import MotorbikeType from "./motorbikeType.model"

const motorbikeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    quality: {
        type: Number,
        required: true,
        min: 0
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: MotorbikeType,
        ref: "MotorbikeType",
        required: true
    }
})

const motorbike = mongoose.model("Motorbike", motorbikeSchema)

export default motorbike
import mongoose from "mongoose"

const motorbikeTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    }
})

const MotorbikeType = mongoose.model("MotorbikeType", motorbikeTypeSchema)

export default MotorbikeType
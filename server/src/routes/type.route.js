import { Router } from "express"
import MotorbikeType from "../models/motorbikeType.model"

const router = Router()

router.get("/", async (req, res) => {
    try {
        const motorbikeTypes = await MotorbikeType.find()
        console.log(motorbikeTypes)
        res.json({
            success: true
        })
    } catch (error) {
        console.log(error)
    }
})

router.post("/", async (req, res) => {
    try {
        const { name, description } = req.body;
        console.log(name, " ", description)
    } catch (error) {
        console.log(error)
    }
})

export default router
import { Router } from 'express'
import User from '../models/user.model'

const router = Router()

router.post('/', async (req, res) => {
    try {
        const { username, password, email } = req.body
        if (!username || !password || !email) {
            res.status(400).json({
                error: 'username and password are required'
            })
        }
        const user = await new User({
            username,
            password,
            email
        })
        await user.save()
        res.json({
            message: 'User created successfully'
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

export default router
import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.json('This is API design by XuanPhat0603')
})

router.post('/', (req, res) => {
    res.json('This is API design by XuanPhat0603')
})

export default router
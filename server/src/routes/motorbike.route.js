import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.json('This is API for motorbike')
})

router.post('/', (req, res) => {
    res.json('This is API for motorbike')
})

router.get('/:id', (req, res) => {
    res.json('This is API for motorbike')
})

router.delete('/:id', (req, res) => {
    res.json('This is API for motorbike')
})

export default router
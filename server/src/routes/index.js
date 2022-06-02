import express from 'express'
import authRoute from './auth.route'
import motorbikeRoute from './motorbike.route'
import bookingRoute from './booking.route'
import typeRoute from './type.route'

const router = express.Router()

const defaultRoutes = [
    {
        path: "/register",
        route: authRoute,
    },
    {
        path: "/motorbike",
        route: motorbikeRoute,
    },
    {
        path: "/booking",
        route: bookingRoute,
    },
    {
        path: "/type",
        route: typeRoute,
    },
    {
        path: "*",
        route: (req, res) => {
            res.json("This is API design by XuanPhat0603")
        }
    }
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

export default router
import express from 'express'

const router = express.Router()

const defaultRoutes = [
    // {
    //     path: "/auth",
    //     route: authRoute,
    // },
    // {
    //     path: "/motorbike",
    //     route: motorbikeRoute,
    // },
    // {
    //     path: "/booking",
    //     route: bookingRoute,
    // },
    {
        path: "/",
        route: (req, res) => {
            res.json("This is API design by XuanPhat0603")
        }
    }
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

export default router
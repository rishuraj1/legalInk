import { User } from "../models/user.model.js"

const loginUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email })
        if (!existingUser) {
            // create new user
            const newUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                image: req.body.image,
                googleId: req.body.id
            })
            res.status(200).json(newUser)
        }
        res.status(200).json(existingUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export { loginUser }
import { User } from "../models/user.model.js"

const loginUser = async (req, res) => {
    try {
        const { email, picture, name, providerId } = req.body
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            if (existingUser?.image !== picture) {
                existingUser.image = picture
                await existingUser.save()
            }

            if (existingUser?.googleId !== providerId) {
                existingUser.googleId = providerId
                await existingUser.save()
            }

            res.status(200).json({ message: "User already exists", user: existingUser })
        } else {
            const newUser = await User.create({
                email,
                name,
                image: picture
            })
            res.status(201).json({ message: "User created", user: newUser })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export { loginUser }
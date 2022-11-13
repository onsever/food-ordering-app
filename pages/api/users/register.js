import User from "../../../models/User";
import dbConnect from "../../../util/dbConnect";
import bcrypt from "bcrypt";

const handler = async (req, res) => {
    await dbConnect();
    const body = req.body;

    const user = await User.findOne({ email: body.email });

    if (user) {
        res.status(400).json({ message: "User already exists" });
        return;
    }

    try {
        const newUser = await new User(body);
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);
        newUser.confirmPassword = await bcrypt.hash(newUser.confirmPassword, salt);
        await newUser.save();
        res.status(201).json({ message: "User created successfully", newUser });
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", error });
    }
}

export default handler;
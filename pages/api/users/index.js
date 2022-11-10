import User from "../../../models/User";
import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
    await dbConnect();
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const users = await User.find();
                res.status(200).json(users);
            } catch (error) {
                console.log(error);
            }
            break;
        case "POST":
            try {
                const user = await User.create(req.body);
                res.status(201).json(user);
            } catch (error) {
                console.log(error);
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }

}

export default handler;
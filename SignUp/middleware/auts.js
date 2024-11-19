import jwt from "jsonwebtoken";
const SECRECT_KEY = process.env.SECRECT_KEY;

const auth = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token) {
            token = token.splite(' ')[1];
            const verifiedUser = jwt.verify(token, SECRECT_KEY);
            req.userId = verifiedUser;
        } else {
            res.status(401).send({ message: 'unauthorized User' });
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).send({ message: 'unauthorized user' });
    }
};
export default auth;
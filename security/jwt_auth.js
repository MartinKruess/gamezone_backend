import { envConfig } from '../scripts/config.js';
import jwt from 'jsonwebtoken';
import { AdminDataModel } from '../schemas/adminSchema.js';
const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

// Auth function
export const authenticateToken = (req, res, next) => {
    const token = req.headers['authtoken'];
    if (token === null) return res.sendStatus(401);

    jwt.verify(
        token,
        envConfig.ACCESS_TOKEN_SECRET,
        async (err, decodedUser) => {
            if (err) return res.status(403).send(err);
            const userFromDB = await AdminDataModel.findById(decodedUser.userID);
            const userPublic = userFromDB.toObject();
            delete userPublic.password;
            userPublic.userID = userPublic._id;
            req.user = userPublic;
            next();
        }
    );
};

// Create Token with userData(DB)
export const createAccessToken = (user) => {
    const accessToken = jwt.sign({ user }, envConfig.ACCESS_TOKEN_SECRET, {
        expiresIn: '7d',
    });
    return accessToken;
};
import { AdminDataModel } from '../schemas/adminSchema.js';
import { authenticateToken, createAccessToken } from '../security/jwt_auth.js';
import bcrypt from 'bcrypt';

export const loginController = async (req, res) => {
    console.log('Login process started... ');
    let admin = {}
    console.log(req.body)

    //Find: userData in userDB
    admin = await AdminDataModel.findOne({username: req.body.username});
    console.log("admin ohne PW", admin)

    if(!admin.password){
        const saltRounds = 10;
        try {
            console.log('Update PW : YES');
            const hashPW = await bcrypt.hash(req.body.password, saltRounds);
            admin = await AdminDataModel.findOneAndUpdate({username: req.body.username}, {password: hashPW});
            console.log("admin mit PW", admin)
        } catch (error) {
            console.log('ERROR:', error, 'Error by changing password!');
        }
    }

    try {
        // COMPARE: loginData === userData
        const isLogedIn = await bcrypt.compare(
            req.body.password,
            admin.password
        );

        if (isLogedIn === false) return;
        
        console.log(admin)
        const generateToken = createAccessToken(admin);
        console.log(generateToken)
        // Send Data to Frontend
        res.send({
            isLogedIn: isLogedIn,
            auth: generateToken,
        });
    } catch (error) {
        console.log('ERROR:', 'Error by Login!', error);
    }
};
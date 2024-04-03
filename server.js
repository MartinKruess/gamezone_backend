import express from 'express';
import cors from 'cors';
import './db/mongo-connect.js';
import { loginController } from './controller/loginController.js';
import { authenticateToken } from './security/jwt_auth.js';
import { caController } from './controller/caController.js';
import { caLoadController } from './controller/caLoadController.js';
import { merchController } from './controller/merchController.js';
import { itemController } from './controller/itemController.js';


const app = express();

app.use(cors({
    origin: 'https://raikuns-gamezone.netlify.app',
    content: 'application/json',
    credentials: true
}));

app.use(express.json({limit: '3MB'}));

const PORT = process.env.PORT || 5500;

app.get('/', (req, res) => {
    res.send('<h1>This is just a test!</h1>');
});

// Open API
app.use('/load/ca',  caLoadController)
app.use('/merchArticles', merchController);

// Management API
app.use('/login', loginController);
app.use('/management/ca', /*authenticateToken,*/ caController)
app.use('/management/item', /*authenticateToken,*/ itemController)


app.use((req, res, next) => {
    res.status(404).json;
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
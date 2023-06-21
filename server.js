import express from 'express';
import cors from 'cors';
import './db/mongo-connect.js';
import { loginController } from './controller/loginController.js';
import { authenticateToken } from './security/jwt_auth.js';
import { caController } from './controller/caController.js';
import { caLoadController } from './controller/caLoadController.js';
import { merchController } from './controller/merchController.js';
import { itemhController } from './controller/itemController.js';

const app = express();

app.use(cors());
app.use(express.json({limit: '3MB'}));

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('<h1>This is just a test!</h1>');
});

app.use('/login', loginController);
app.use('/management/ca', /*authenticateToken,*/ caController)
app.use('/load/ca',  caLoadController)
app.use('/merchArticles', merchController);
app.use('/management/item', itemhController)

app.use((req, res, next) => {
    res.status(404).json;
});
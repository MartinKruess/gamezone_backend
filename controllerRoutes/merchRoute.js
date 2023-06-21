import {express} from ("express");
import {router} from express.Router();
import merchController from("../controllers/mediaControllers");

export const router = router.get('/merchArticles', merchController)


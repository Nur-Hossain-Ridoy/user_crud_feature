import { Router} from "express";
import {
    searchUser,
    view,
    userForm,
    createUser
} from '../controllers/userController'

const router = Router()

router.get('/adduser', userForm)
router.post('/adduser', createUser)
router.get('/', view)
router.post('/', searchUser)


export default router;
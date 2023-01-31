import { Router} from "express";
import {
    searchUser,
    view,
    userForm,
    createUser,
    updateUser,
    editView,
    deleteUser,
} from '../controllers/userController'

const router = Router()

router.delete('/:id', deleteUser)
router.get('/adduser', userForm)
router.post('/adduser', createUser)
router.get('/edit/:id', editView)
router.post('/update/:id', updateUser)
router.get('/', view)
router.post('/', searchUser)


export default router;
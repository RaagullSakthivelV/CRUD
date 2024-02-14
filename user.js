import express from 'express';
import {login,emails,email,create,update,deletefun,partialupdate} from './requesthandler.js';
const router = express.Router();
router.use(express.json())
router.patch('/login/partialupdate',partialupdate)
router.delete('/login/delete',deletefun)
router.put('/login/update',update)
router.post('/login/create',create)
router.get('/login/emails/:username',email)
router.get('/login/emails',emails)
router.get('/login',login)
export default router;
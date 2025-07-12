import express from 'express';
import { createUser, getUser, getUserById, updateUser, deleteUser } from '../controller/userController.js';
const router = express.Router();
// Route to create a new user
router.post('/user', createUser);
// Route to get all users
router.get('/users', getUser);
// Route to get a user by ID
router.get('/user/:id', getUserById);
// Route to update a user by ID
router.put('/user/:id', updateUser)
// Route to delete a user by ID
router.delete('/user/:id', deleteUser); 
export default router;
import { addUser, getUserList, getUserListById, updateUserService, deleteUserService } from "../service/userService.js";

export const createUser = async (req, res, next) => {
    try {
        const user = await addUser(req.body);
        return res.status(201).json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await getUserList();
        return res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getUserById = async (req, res, next) => {
    try {
        const user = await getUserListById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedUser = await updateUserService(id, req.body);
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }       
        return res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);       
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteUser = await deleteUserService(id);
        if (!deleteUser) {
            return res.status(404).json({ message: "User not found" });
        }   
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
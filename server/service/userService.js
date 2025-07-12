import user from "../model/userModel.js";

export const addUser = async (userData) => {
    try {
        const { name, email, address } = userData;
        if (!name || !email || !address) {
            throw new Error("Name, email, and address are required");
        }
        const existingUser = await user.findOne({ email: email });
        if (existingUser) { 
            throw new Error("User with this email already exists");
        }
        const newUser = new user({ name, email, address });
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        console.error("Error in addUser service:", error);
        throw error; 
    }
}

export const getUserList = async () => {
    try {
        const userData = await user.find();
        if (!userData) {
            throw new Error("User not found");
        }
        return userData;
    } catch (error) {
        console.error("Error in getUser service:", error);
        throw error; 
    }
}

export const getUserListById = async (id) => {
    try {
        const userData = await user.findById(id);
        if (!userData) {
            throw new Error("User not found");
        }
        return userData;
    } catch (error) {
        console.error("Error in getUserById service:", error);
        throw error; 
    }
}

export const updateUserService = async (id, userData) => {
    try {
        const updatedUser = await user.findByIdAndUpdate(id, userData, { new: true });
        if (!updatedUser) {
            throw new Error("User not found");
        }   
        return updatedUser;
    } catch (error) {
        console.error("Error in updateUser service:", error);
        throw error; 
    }
}

export const deleteUserService = async (id) => {
    try {
        const deletedUser = await user.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new Error("User not found");
        }   
        return deletedUser;
    } catch (error) {
        console.error("Error in deleteUser service:", error);
        throw error; 
    }
}
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from '../../firebase';

export const registerUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export const loginUser = async (email: string, password: string) => {
     return await signInWithEmailAndPassword(auth, email, password);
}

export const logoutUser = async () => {
    signOut(auth);
}
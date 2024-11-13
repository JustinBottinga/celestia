// Import necessary functions from Firebase
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

export const uploadImage = async (file: File) => {
    try {
        // Create a reference to the storage bucket
        const storageRef = ref(storage, `images/${Date.now()}-${file.name}`);

        // Upload the file to Firebase Storage
        const snapshot = await uploadBytes(storageRef, file);

        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(snapshot.ref);

        return downloadURL; // Return the download URL
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};

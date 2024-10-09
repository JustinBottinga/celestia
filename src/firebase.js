import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfrAvP0hMatGngQPQS3cxSAJCK1G3p5f0",
  authDomain: "celestia-app-fcbe3.firebaseapp.com",
  projectId: "celestia-app-fcbe3",
  storageBucket: "celestia-app-fcbe3.appspot.com",
  messagingSenderId: "224457548194",
  appId: "1:224457548194:web:956f8c1ccfccba164852fb",
  measurementId: "G-D5Y8MLPPKH"
};

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
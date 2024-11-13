import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile 
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNHBSmboiAjrN0mmCXxrsZGpUP_8UscG0",
  authDomain: "login-and-registration-p-7c8bd.firebaseapp.com",
  projectId: "login-and-registration-p-7c8bd",
  storageBucket: "login-and-registration-p-7c8bd.firebasestorage.app",
  messagingSenderId: "891751057897",
  appId: "1:891751057897:web:74d2314e1919256ab92378",
  measurementId: "G-4HW568QKQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign up user function with additional profile info
const signUpUser = async (email, password, firstName, lastName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, {
      displayName: `${firstName} ${lastName}`,
    });
    console.log("User signed up:", userCredential.user);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("Error during sign-up:", error.message);
    return { success: false, message: error.message };
  }
};

// Login user function remains the same
const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("Error during login:", error.message);
    return { success: false, message: error.message };
  }
};

// Export the functions
export { signUpUser, loginUser };

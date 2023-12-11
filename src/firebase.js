import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAF-mIsvAzzs6FOU8N-hljNOyR--fM_QLk",
    authDomain: "car--rental.firebaseapp.com",
    projectId: "car--rental",
    storageBucket: "car--rental.appspot.com",
    messagingSenderId: "337781960335",
    appId: "1:337781960335:web:ea94e575b31c97c1fe0afa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
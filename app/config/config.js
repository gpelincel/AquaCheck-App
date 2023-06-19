import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCBB7_XD8FbClpxLKft9HngQLHzPWi4fIE",
    authDomain: "aquacheck-4fd1f.firebaseapp.com",
    projectId: "aquacheck-4fd1f",
    storageBucket: "aquacheck-4fd1f.appspot.com",
    messagingSenderId: "734992815468",
    appId: "1:734992815468:web:2c54eb5b798a5a2349cf49"
});

const app = initializeApp(firebaseConfig);


export default app;
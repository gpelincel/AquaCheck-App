import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCz2__9rKB5_2AWq343FQuOgbyC18nFfmo",
    authDomain: "aquachecker-40a27.firebaseapp.com",
    databaseURL: "https://aquachecker-40a27-default-rtdb.firebaseio.com",
    projectId: "aquachecker-40a27",
    storageBucket: "aquachecker-40a27.appspot.com",
    messagingSenderId: "863569882652",
    appId: "1:863569882652:web:9c0a9795ff0d42c4bbf9d9"
};

const app = initializeApp(firebaseConfig);

export default app;
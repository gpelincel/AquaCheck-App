import { useNavigate } from "@remix-run/react";
import Waves from "../components/waves/waves";
import { initializeApp } from "firebase/app";
import { QuerySnapshot, collection, getDocs, getFirestore, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCBB7_XD8FbClpxLKft9HngQLHzPWi4fIE",
    authDomain: "aquacheck-4fd1f.firebaseapp.com",
    projectId: "aquacheck-4fd1f",
    storageBucket: "aquacheck-4fd1f.appspot.com",
    messagingSenderId: "734992815468",
    appId: "1:734992815468:web:2c54eb5b798a5a2349cf49"
});

export default function Dashboard() {

    const [userData, setUserData] = useState([]);

    const db = getFirestore(firebaseApp);
    const waterCollection = collection(db, "water_data");

    useEffect(() => {
        const userToken = localStorage.getItem("token");
        console.log("UserToken: " + userToken);

        const getData = async () => {

            const select = query(waterCollection, where("userToken", "==", userToken));

            onSnapshot(select, (data) => {
                console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                setUserData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            })
        }

        getData();

    }, []);

    return (
        <>
            <main className="flex items-center justify-center w-full h-screen">
                <div className="text-center flex flex-col gap-4">
                    {userData.map(data => {
                        let volume = (data.altura*Math.pow((data.diametro/2), 2)*Math.PI)*1000;
                        let porcentagem = (data.capacidade*100)/volume;
                        return (
                            <>
                            <h1 className="text-7xl">{porcentagem.toFixed(1)}%</h1>
                            <p key={data.userToken}>{volume.toFixed(2)} Litros</p></>
                        );
                    })}
                    <p>De água restante</p>
                </div>
            </main>
            <Waves></Waves>
        </>

    );
}
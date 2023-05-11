import { useNavigate } from "@remix-run/react";
import Waves from "../components/waves/waves";
import { QuerySnapshot, collection, getDocs, getFirestore, onSnapshot, query, where } from "firebase/firestore";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import firebase from "../firebase";

export default function Dashboard() {

    const [userData, setUserData] = useState([]);

    useEffect(() => {

        const db = getDatabase(firebase.app);
        const userToken = localStorage.getItem('userToken');

        function getData() {
            const starCountRef = ref(db, "/" + userToken);

            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();


                var diferencaAltura = data['alturaSTampa'] - data['alturaTampa'];
                var litros = ((data.level - diferencaAltura) * data['capacidade']) / data['alturaTampa'];
                var porcentagem = (100 * litros) / data['capacidade'];

                data.litros = litros.toFixed(2);
                data.porcentagem = porcentagem.toFixed(2);

                setUserData(data);
            });
        }

        getData();
    }, []);

    return (
        <>
            <main className="flex items-center justify-center w-full h-screen">
                <div className="text-center flex flex-col gap-4">
                    {console.log(userData.level)}
                    <h1 className="text-7xl">{userData.porcentagem}%</h1>
                    <p >{userData.litros} Litros</p>
                    <p>De água restante</p>
                </div>
            </main >
            <Waves></Waves>
        </>

    );
}
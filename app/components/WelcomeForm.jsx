import { useNavigate } from "@remix-run/react";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { useState } from "react";

export default function WelcomeForm() {
    const navigate = useNavigate();

    const [userToken, setToken] = useState("");
    const [altura, setAltura] = useState("");
    const [diametro, setDiametro] = useState("");
    const [capacidade, setCapacidade] = useState("");

    const firebaseApp = initializeApp({
        apiKey: "AIzaSyCBB7_XD8FbClpxLKft9HngQLHzPWi4fIE",
        authDomain: "aquacheck-4fd1f.firebaseapp.com",
        projectId: "aquacheck-4fd1f",
        storageBucket: "aquacheck-4fd1f.appspot.com",
        messagingSenderId: "734992815468",
        appId: "1:734992815468:web:2c54eb5b798a5a2349cf49"
    });

    const db = getFirestore(firebaseApp);
    const waterCollection = collection(db, "water_data");

    async function saveData(e) {

        e.preventDefault();

        localStorage.setItem("token", userToken);

        const data = await addDoc(waterCollection, {
            userToken,
            altura,
            diametro,
            capacidade
        });

        console.log(data);

        navigate("/dashboard");
    }

    return (
        <>
            <form className="flex flex-col justify-center p-4 rounded gap-4 w-4/5 max-w-md">
                <div className="logo text-center text-xl">
                    <i className="fa-solid fa-water text-4xl"></i>
                    <h1>AquaChecker</h1>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="ID" value={userToken} name="token" className="input input-bordered bg-white w-full max-w-xs" onChange={(e) => setToken(e.target.value)} required />
                </div>
                <div className="dimensions">
                    <h1>Dimensões da sua caixa em metros</h1>
                    <div className="form-control flex gap-1">
                        <input type="number" name="altura" value={altura} min={1} placeholder="Altura (m)" className="input input-bordered bg-white w-full max-w-xs" onChange={(e) => setAltura(e.target.value)} required />

                        <input type="number" min={1} name="diametro" value={diametro} placeholder="Diâmetro (m)" className="input input-bordered bg-white w-full max-w-xs" onChange={(e) => setDiametro(e.target.value)} required />

                        <input type="number" min={1} name="capacidade" value={capacidade} placeholder="Capacidade (L)" className="input input-bordered bg-white w-full max-w-xs" onChange={(e) => setCapacidade(e.target.value)} required />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-1 w-3/4">
                    <button className="btn btn-accent" onClick={saveData}>Enviar</button>
                    <button className="btn bg-red-500 border-none" type="reset">Apagar</button>
                </div>
            </form>
        </>
    );
}
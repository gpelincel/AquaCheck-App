import { useNavigate } from "@remix-run/react";
import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import firebase from "../firebase";


export default function WelcomeForm() {
    const navigate = useNavigate();
    const [userToken, setToken] = useState("");
    const [alturaTampa, setAlturaTampa] = useState("");
    const [alturaSTampa, setAlturaSTampa] = useState("");
    const [capacidade, setCapacidade] = useState("");

    async function saveData(e) {

        e.preventDefault();

        console.log(userToken);

        localStorage.setItem("userToken", userToken);

        const db = getDatabase(firebase.app);

        set(ref(db, '/' + userToken), {
            capacidade: capacidade,
            alturaTampa: alturaTampa,
            alturaSTampa: alturaSTampa,
        });

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
                        <input type="number" name="alturaTampa" value={alturaTampa} min={1} placeholder="Altura c/ tampa (cm)" className="input input-bordered bg-white w-full max-w-xs" onChange={(e) => setAlturaTampa(e.target.value)} required />

                        <input type="number" min={1} name="alturaSTampa" value={alturaSTampa} placeholder="Altura s/ tampa (cm)" className="input input-bordered bg-white w-full max-w-xs" onChange={(e) => setAlturaSTampa(e.target.value)} required />

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
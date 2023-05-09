import Waves from "../components/waves/waves";

export default function Dashboard() {
    return (
        <>
            <main className="flex items-center justify-center w-full h-screen">
                <div className="text-center">
                    <h1 className="text-7xl">50%</h1>
                    <p>1000 L</p>
                    <p>De água restante</p>
                </div>
            </main>
            <Waves></Waves>
        </>

    );
}
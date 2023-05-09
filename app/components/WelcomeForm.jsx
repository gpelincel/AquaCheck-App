export default function WelcomeForm() {
    return (
        <>
            <form className="flex flex-col p-4 rounded gap-4 w-4/5">
                <div className="logo text-center text-xl">
                    <i class="fa-solid fa-water text-4xl"></i>
                    <h1>AquaChecker</h1>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="ID" class="input input-bordered bg-white w-full max-w-xs" required />
                </div>
                <div className="dimensions">
                    <h1>Dimensões da sua caixa em metros</h1>
                    <div className="form-control grid grid-cols-2 gap-1">
                        <input type="number" placeholder="Altura (m)" class="input input-bordered bg-white w-full max-w-xs" required />
                        <input type="number" placeholder="Diâmetro (m)" class="input input-bordered bg-white w-full max-w-xs" required />
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-1 w-1/2">
                    <button class="btn btn-accent" type="submit">Enviar</button>
                    <button class="btn bg-red-500 border-none" type="reset">Apagar</button>
                </div>
            </form>
        </>
    );
}
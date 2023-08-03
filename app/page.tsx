import Image from 'next/image';

export default function Home() {
    return (
        <main className="pt-16">
            <div className=" flex flex-col justify-center items-center gap-2 ">
                <img
                    src="https://storage.googleapis.com/bucket-energiasolar/large_seslab_paneles_1f27e6fcba/large_seslab_paneles_1f27e6fcba.jpg"
                    alt="contruccion"
                    className="object-cover w-96 h-96 rounded-full shadow-lg"
                />
                <h1 className="text-xl">
                    Lo sentimos, actualmente este sitio esta en construcción
                </h1>
                <h3>
                    si deseas contactarnos, puedes hacerlo al correo:
                    <span className="font-bold">
                        {' '}
                        info@somosmasqueenergiadcsas.com
                    </span>
                </h3>
                <h2>Visítanos en unos días</h2>
            </div>
        </main>
    );
}

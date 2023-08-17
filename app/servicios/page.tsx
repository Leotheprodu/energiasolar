import { Image } from '@nextui-org/image';
import { getData } from '@/components/serverComponents/getData';
import NexImage from 'next/image';
export default async function Servicios() {
    const datos = await getData('servicios?populate=*', false);
    const { data } = datos;
    return (
        <div className=" mx-6 xl:mx-[20rem] mt-10 mb-52">
            <div className=" hidden sm:flex items-center justify-center  relative">
                <h1 className="absolute z-10 text-blanco text-center uppercase text-6xl font-bold">
                    {' '}
                    Nuestros Servicios
                </h1>
                <Image
                    src="https://storage.googleapis.com/bucket-energiasolar/IMG_0647_22f98bd0d9/IMG_0647_22f98bd0d9.jpg"
                    alt="contruccion"
                    width={0}
                    height={0}
                    sizes="100%"
                    as={NexImage}
                    className="object-cover z-0"
                    style={{ width: '100%', height: '30rem' }} // optional
                    isZoomed
                ></Image>
            </div>
            <h2 className="text-3xl text-secundario text-center mt-10">
                Soluciones Solares Integrales
            </h2>

            <div>
                <ul className="mt-10 flex flex-col md:flex-row md:flex-nowrap gap-5">
                    {data.map(
                        ({
                            attributes: { nombre },
                        }: {
                            attributes: { nombre: string };
                        }) => {
                            return (
                                <li
                                    key={nombre}
                                    className="text-center hover:scale-110 transition-transform "
                                >
                                    {nombre}
                                </li>
                            );
                        }
                    )}
                </ul>
            </div>
            <div className="mt-[10rem] flex flex-col gap-5">
                <p>
                    {' '}
                    DC Energía Solar es tu socio confiable en soluciones
                    energéticas en Colombia. Nos especializamos en instalación y
                    ejecución de proyectos solares, ofreciendo servicios On
                    Grid, Off Grid y sistemas híbridos. Nuestra experiencia
                    garantiza resultados de calidad y eficiencia, respaldados
                    por un mantenimiento continuo que asegura el máximo
                    rendimiento a lo largo del tiempo.
                </p>

                <p>
                    Descubre cómo DC Energía Solar puede transformar tu empresa
                    con soluciones solares de vanguardia. Contáctanos para una
                    consulta personalizada y comienza tu viaje hacia la
                    independencia energética y la sostenibilidad. Juntos,
                    estamos creando un mañana más brillante y eficiente.
                </p>
            </div>
        </div>
    );
}

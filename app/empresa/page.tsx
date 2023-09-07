import Image from 'next/image';
import { EMP_NAME } from '@/constants';
export default async function Empresa() {
    /*  const datos = await getData('contacto');
    const { data } = datos; */
    return (
        <>
            <div className=" flex flex-col justify-center items-center gap-2 px-6 mb-52 mt-32 w-3/5 mx-auto">
                <h2 className="text-3xl font-bold mb-5">¿Quienes Somos?</h2>

                <p className="mb-8">
                    {' '}
                    <span className="uppercase text-primario">DC </span>
                    <span className="uppercase text-secundario">Energia </span>
                    <span className="uppercase text-terciario">Solar </span>
                    es una compañía dedicada a la sostenibilidad energética,
                    comprometida con el medio ambiente y la licha contra el
                    cambio climático, enspecializada en la integración y
                    ejecición de proyectos sustentables a través de la energía
                    solar.{' '}
                </p>
                <p>
                    Laborando desde el año 2017 en Costa Rica como
                    <span className="uppercase text-secundario"> Solar </span>
                    <span className="uppercase text-primario">+ </span>
                    <span className="uppercase text-terciario">Energy </span>en
                    la importación y venta de equipos fotovoltaicos, diseño,
                    instalacion y ejecución de proyectos solares, asi como en el
                    matenimiento de estos sistemas de energía renovable tanto On
                    Grid, como Off Grid e híbridos.
                </p>
            </div>

            <div className="flex flex-col gap-5 md:flex-row justify-center items-center p-5 bg-no-repeat bg-center bg-cover  bg-[url('https://storage.googleapis.com/bucket-energiasolar/https://storage.googleapis.com/%7Bbucket-name%7D/panel_2562239_1280_d4b7230e34/panel_2562239_1280_d4b7230e34.jpg')]">
                <div className=" rounded-full bg-primario w-[25rem] h-[25rem] flex flex-col justify-center items-center overflow-hidden hover:scale-105 transition-transform duration-300 ease-out">
                    <h3 className="uppercase">Misión</h3>
                    <p className="p-10 text-center">
                        Nuestro objetivo es incrementar en la región la
                        eficiencia y el ahorro en la utilización de energía,
                        ofreciendo soluciones a través de energía renovable
                        fotovoltaica y generando proyectos basados en las
                        necesidades de cada individuo u organización.
                    </p>
                </div>
                <div className="w-[25rem] h-[25rem] flex items-center justify-center bg-blanco/80 backdrop-blur-sm rounded ">
                    <Image
                        src={
                            'https://storage.googleapis.com/bucket-energiasolar/solar_1_7714a67ab6/solar_1_7714a67ab6.png'
                        }
                        width={300}
                        height={300}
                        alt={`Logo ${EMP_NAME}`}
                        className="m-auto"
                    ></Image>
                </div>
                <div className=" rounded-full bg-secundario w-[25rem] h-[25rem] flex flex-col justify-center items-center overflow-hidden hover:scale-105 transition-transform duration-300 ease-out">
                    <h3 className="uppercase">Visión</h3>
                    <p className="p-10 text-center">
                        Ser líderes en Latinoamérica en la implementación de
                        nuevas tecnologías que provean energía a partir de
                        fuentes renovables fotovoltaicas.
                    </p>
                </div>
            </div>
        </>
    );
}

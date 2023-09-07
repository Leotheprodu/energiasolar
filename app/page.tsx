import { getData } from '@/components/serverComponents/getData';
import { BannerSlider } from '@/components/sliders/BannerSlider';
import { EMP_NAME } from '@/constants';

export default async function Home() {
    const datos = await getData('sliders?populate=*');
    const { data } = datos;
    return (
        <>
            {data ? <BannerSlider datos={data} /> : 'cargando'}
            <div className=" flex flex-col justify-center items-center gap-2 px-6 mb-52 mt-32 p-3 w-auto md:w-3/5 mx-auto">
                <h1 className="text-3xl font-bold text-center">
                    Tu Socio en Energía Renovable en Colombia
                </h1>
                <h3 className="text-bold text-xl text-center">{`Bienvenidos a ${EMP_NAME}`}</h3>
                <p className="text-center">
                    {' '}
                    Estamos comprometidos con la transformación sostenible y el
                    futuro energético del país, ofreciendo soluciones
                    innovadoras y personalizadas que se adaptan a las
                    necesidades únicas de tu empresa o hogar.
                </p>
            </div>
        </>
    );
}

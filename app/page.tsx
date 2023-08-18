import { getData } from '@/components/serverComponents/getData';
import { BannerSlider } from '@/components/sliders/BannerSlider';
import { EMP_NAME } from '@/constants';

export default async function Home() {
    const datos = await getData('sliders?populate=*');
    const { data } = datos;
    return (
        <>
            {data ? <BannerSlider datos={data} /> : 'cargando'}
            <div className=" flex flex-col justify-center items-center gap-2 px-6 mb-52">
                <h1 className="text-xl text-secundario">
                    Tu Socio en Energía Renovable en Colombia
                </h1>
                <h3>{`Bienvenidos a ${EMP_NAME}`}</h3>
                <p>
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

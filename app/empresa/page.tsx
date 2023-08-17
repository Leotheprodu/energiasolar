import { getData } from '@/components/serverComponents/getData';
import { BannerSlider } from '@/components/sliders/BannerSlider';

export default async function Empresa() {
    /*  const datos = await getData('contacto');
    const { data } = datos; */
    return (
        <>
            <div className=" flex flex-col justify-center items-center gap-2 px-6 mb-52">
                <h1 className="text-xl text-secundario">
                    Tu Socio en Energía Renovable en Colombia
                </h1>
                <h3>Bienvenidos a DC Energía Solar</h3>
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

import { BannerSlider } from '@/components/sliders/BannerSlider';
import Image from 'next/image';
async function getData(url: string) {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(`${baseUrl}${url}`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
export default async function Home() {
    const datos = await getData('sliders?populate=*');
    const { data } = datos;
    return (
        <main>
            <div className=" flex flex-col justify-center items-center gap-2 ">
                <BannerSlider datos={data} />
                {/* <Image
                    src="https://storage.googleapis.com/bucket-energiasolar/IMG_0647_22f98bd0d9/IMG_0647_22f98bd0d9.jpg"
                    alt="contruccion"
                    width={0}
                    height={0}
                    sizes="100%"
                    className="object-cover"
                    style={{ width: '100%', height: '40rem' }} // optional
                ></Image> */}

                <h1 className="text-xl text-secundario">
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

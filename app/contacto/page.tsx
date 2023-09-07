import { FormulariodeContacto } from '@/components/contact-form';
export default async function Contacto() {
    return (
        <>
            <div className=" overflow-hidden w-full">
                <iframe
                    className=" border-0 w-full h-96 shadow-xl"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.9092386915973!2d-75.57707561694711!3d6.191205931622598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4682619cf6c301%3A0x2cfd3d806e109e96!2sEdificio%20Xerox!5e0!3m2!1ses!2scr!4v1694037668433!5m2!1ses!2scr"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className=" flex flex-col justify-center items-center gap-2 px-6 mb-52 mt-10">
                <h1 className="text-xl text-terciario mt-10">
                    Contáctanos para más información
                </h1>
                <h3>Llena el formulario</h3>
                <div>
                    <FormulariodeContacto />
                </div>
            </div>
        </>
    );
}

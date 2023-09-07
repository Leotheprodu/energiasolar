'use client';
import React from 'react';
import { useRef, useState } from 'react';
import { IconMapPin, IconBrandWhatsapp, IconMail } from '@tabler/icons-react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import { ContactInfo } from './contact-info';
import { Button, Input, Textarea } from '@nextui-org/react';

export function FormulariodeContacto() {
    const [formStatus, setFormStatus] = useState<string>('');
    const [statusenviado, setStatusEnviado] = useState<boolean>(false);
    const captcha = useRef(null);
    const InfoCardSize: number = 40;
    const infoCardStroke: number = 2;
    const [formInput, setFormInput] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });
    const onChange = () => {
        // @ts-ignore
        if (captcha.current && captcha.current.getValue()) {
            setFormStatus('');
        }
    };
    // @ts-ignore
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormInput((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setFormStatus('...Enviando');
        // @ts-ignore
        if (captcha.current.getValue()) {
            emailjs
                .send(
                    '818414556',
                    'template_uvzanqr',
                    formInput,
                    'Av6NXbb_UdOx1X4Cx'
                )
                .then(
                    function (response) {
                        console.log('SUCCESS!', response.status, response.text);
                        setFormStatus('Mensaje enviado Correctamente');
                        setStatusEnviado(true);
                    },
                    function (error) {
                        console.log('FAILED...', error);
                    }
                );
        } else setFormStatus('Por favor acepta el captcha');
    };

    return (
        <>
            <div className="flex flex-col md:grid md:grid-cols-5 gap-8 w-full">
                <div className="col-start-2 col-end-5">
                    <form className="flex flex-col" onSubmit={onSubmit}>
                        <div className="mb-3">
                            <Input
                                label="nombre"
                                name="nombre"
                                className="form-control"
                                type="text"
                                onChange={handleChangeInput}
                                value={formInput.nombre}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                label="email"
                                name="email"
                                onChange={handleChangeInput}
                                value={formInput.email}
                                className="form-control"
                                type="email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <Textarea
                                label="mensaje"
                                name="mensaje"
                                onChange={handleChangeInput}
                                value={formInput.mensaje}
                                className="form-control2"
                                required
                            />
                        </div>
                        <div className="my-0 mx-auto">
                            <ReCAPTCHA
                                ref={captcha}
                                sitekey="6LdqhcAiAAAAAE8hwgEptpxIcQHsW_c2S_AfkFmw"
                                onChange={onChange}
                            />
                        </div>
                        <div>
                            <p className="text-center">{formStatus}</p>
                        </div>
                        <div className="my-0 mx-auto">
                            <Button
                                className="mt-4"
                                color="primary"
                                spinner={
                                    formStatus === '...Enviando' ? true : false
                                }
                                disabled={statusenviado}
                                type="submit"
                            >
                                Enviar
                            </Button>
                        </div>
                    </form>
                </div>
                <div className=" flex flex-col gap-2 col-start-5 col-end-6 w-full">
                    <ContactInfo
                        icon={
                            <IconMapPin
                                size={InfoCardSize}
                                stroke={infoCardStroke}
                            />
                        }
                        titulo="Dirección"
                        parrafo="Edificio Xerox, Medellín, Antioquia, Colombia"
                        link="https://goo.gl/maps/hg9FMQ6czY2frHBw7"
                    />
                    <ContactInfo
                        icon={
                            <IconBrandWhatsapp
                                size={InfoCardSize}
                                stroke={infoCardStroke}
                            />
                        }
                        titulo="Whatsapp"
                        parrafo="+573157033937"
                        link="https://wa.me/573157033937?text=Me%20gustaría%20saber%20más%20de%20ustedes,%20"
                    />
                </div>
            </div>
        </>
    );
}

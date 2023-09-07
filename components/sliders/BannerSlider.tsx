'use client';
import { Link } from '@nextui-org/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button } from '@nextui-org/react';
interface Attributes {
    img_link: {
        data: {
            attributes: {
                formats: {
                    large: {
                        url: string;
                    };
                };
            };
        };
    };
    link: string;
    link_title: string;
    title: string;
    description: string;
    slider_type: string;
}
interface mainBannerSlider {
    attributes: Attributes;
}
interface Props {
    datos: mainBannerSlider[];
}

export function BannerSlider({ datos }: Props) {
    return (
        <>
            <Carousel
                autoPlay
                infiniteLoop
                interval={6000}
                showStatus={false}
                showIndicators
                emulateTouch
                stopOnHover={false}
                showThumbs={false}
            >
                {datos.map(({ attributes }) => {
                    const { img_link, link, link_title, title, description } =
                        attributes;

                    return (
                        <div
                            key={title}
                            className="h-[60vh] w-full flex justify-center items-center px-2"
                            style={{
                                background: `url(${img_link.data.attributes.formats.large.url})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                            }}
                        >
                            <div className="flex flex-col gap-4 text-blanco justify-center items-center bg-terciario/80 p-4 rounded-2xl backdrop-blur-sm shadow-md">
                                <h2 className="uppercase text-7xl">{title}</h2>
                                <p className="text-2xl">{description}</p>
                                <Button
                                    href={link}
                                    as={Link}
                                    className="bg-secundario uppercase text-terciario"
                                    size="lg"
                                >
                                    {link_title}
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </>
    );
}

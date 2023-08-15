'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
                showIndicators={false}
                emulateTouch
                showThumbs={false}
            >
                {datos.map(({ attributes }) => {
                    const { img_link, link, link_title, title, description } =
                        attributes;

                    return (
                        <div
                            key={title}
                            className="BannerSlider__div"
                            style={{
                                background: `url(${img_link.data.attributes.formats.large.url})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div className="BannerSlider__div-texto">
                                <h2>{title}</h2>
                                <p>{description}</p>
                                <a target="_blank" href={link}>
                                    {link_title}
                                </a>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </>
    );
}

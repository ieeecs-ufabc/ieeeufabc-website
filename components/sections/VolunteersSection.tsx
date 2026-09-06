'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { volunteers } from '@/data/volunteers';
import 'swiper/css';

export function VolunteersSection() {
    const doubleVolunteers = [
        ...volunteers,
        ...volunteers,
    ];

    return (
        <section className="bg-ieee-blue text-white py-16 overflow-hidden w-full">
            <div className="max-w-3xl mx-auto text-center px-4 mb-12">
                <h2 className="text-4xl font-bold mb-3 tracking-wide">Voluntários</h2>
                <p className="text-blue-100 text-base font-light">
                    Maecenas tincidunt justo metus. Donec malesuada ipsum eu tortor rhoncus sollicitudin.
                </p>
            </div>

            <div className="max-w-7xl mx-auto overflow-hidden"> {/*Aqui altera o width do carrosel*/}
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    speed={4000} // Caso precise ajustar a velocidade do carrosel, é aqui. Quanto maior o valor, mais lento.
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false, // Deixei false, mas caso não precise parar, apenas alterar.
                    }}
                    slidesPerView="auto"
                    spaceBetween={120} // Caso esteja "travando" o carrosel, se diminuir esse valor ele melhora, porém fica com mais voluntários aparecendo
                    className="[&_.swiper-wrapper]:!ease-linear"
                >
                    {doubleVolunteers.map((volunteer, index) => (
                        <SwiperSlide key={`${volunteer.id}-${index}`} className="!w-auto">
                            <div className="flex flex-col items-center w-40 shrink-0">
                                <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-lg">
                                    <Image
                                        src={volunteer.image}
                                        alt={volunteer.name}
                                        fill
                                        sizes="144px"
                                        className="object-cover"
                                    />
                                </div>
                                <span className="mt-4 text-white font-semibold text-base text-center leading-tight">
                                    {volunteer.name}
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
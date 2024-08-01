import React, { useState } from 'react';
import { sections, contents } from '../data';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Tokoh() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <>
            <div id='tokoh' className="">
                {sections.filter((section) => section.name === "tokoh-pejuang").map((section, index) => (
                    <>
                        <p style={{ fontSize: "4.5vw", margin: "0 9%" }} className="alumni-sans-regular text-red-900 z-30 font-extrabold border-y drop-shadow border-red-900 text-center">{section.title}</p>

                        <Swiper
                            modules={[Navigation, Pagination]}
                            centeredSlides={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 3,
                                    spaceBetween: -98,
                                },
                                350: {
                                    slidesPerView: 3,
                                    spaceBetween: -109,
                                },
                                359: {
                                    slidesPerView: 3,
                                    spaceBetween: -111,
                                },
                                370: {
                                    slidesPerView: 3,
                                    spaceBetween: -114,
                                },
                                380: {
                                    slidesPerView: 3,
                                    spaceBetween: -119,
                                },
                                400: {
                                    slidesPerView: 3,
                                    spaceBetween: -123,
                                },
                                410: {
                                    slidesPerView: 3,
                                    spaceBetween: -126,
                                },
                                420: {
                                    slidesPerView: 3,
                                    spaceBetween: -130,
                                },
                                800: {
                                    slidesPerView:3,
                                    spaceBetween:-243,
                                },
                                900: {
                                    slidesPerView:3,
                                    spaceBetween:-275,
                                },
                                1000: {
                                    slidesPerView:3,
                                    spaceBetween:-310,
                                },
                                1050: {
                                    slidesPerView:3,
                                    spaceBetween:-320,
                                },
                                1100: {
                                    slidesPerView:3,
                                    spaceBetween:-350,
                                },
                                1190: {
                                    slidesPerView:3,
                                    spaceBetween:-370,
                                },
                                1250: {
                                    slidesPerView:3,
                                    spaceBetween:-400,
                                },
                                1380: {
                                    slidesPerView:3,
                                    spaceBetween:-435,
                                }
                            }}
                            // pagination={{
                            //     type: 'fraction',
                            // }}
                            loop={true}
                            // navigation={true}
                            onSlideChange={(swiper) => {
                                setCurrentSlide(swiper.realIndex);
                            }}
                        >
                            {contents.map((slideContent, index) => (
                                <SwiperSlide key={slideContent.id} virtualIndex={index}>
                                    <img style={{ width: "13vw", height: "14.5vw" }} src={`/img/${slideContent.img}`} alt={slideContent.title} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <p style={{ fontSize: "4.5vw", margin: "0 9%" }} className="alumni-sans-regular text-red-900 z-10 font-extrabold border-t drop-shadow border-red-900 text-center"></p>
                        <div className="caption bg-white/[.5] rounded-2xl" style={{ margin: "2% 9% 5% 9%", padding: "1% 6.5% 3% 6.5%" }}>
                            <p style={{ fontSize: "3.5vw", margin: "0 9%" }} className="alumni-sans-regular text-red-900 z-10 font-extrabold drop-shadow text-center">{contents[currentSlide].title}</p>
                            <p style={{ fontSize: "1.5vw" }} className="font-normal text-center text-red-950 rasa-regular drop-shadow">{contents[currentSlide].description}</p>
                        </div>
                    </>
                ))}

            </div>
        </>
    )
}

export default Tokoh;
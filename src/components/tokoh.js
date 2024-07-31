import React, { useRef, useState } from 'react';
import Navbar from '../components/navbar';
import { sections, contents } from '../data';
import { Virtual, Navigation, Pagination, Loop } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Tokoh() {
    const [swiperRef, setSwiperRef] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <>
            <div id='tokoh' className="">
                {sections.filter((section) => section.name === "tokoh-pejuang").map((section, index) => (
                    <>
                        <p style={{ fontSize: "4.5vw", margin: "0 9%" }} className="alumni-sans-regular text-red-900 z-30 font-extrabold border-y drop-shadow border-red-900 text-center">{section.title}</p>

                        <Swiper
                            modules={[Navigation, Pagination]}
                            onSwiper={setSwiperRef}
                            centeredSlides={true}
                            breakpoints={{
                                430: {
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
                                    spaceBetween:-300,
                                },
                                1100: {
                                    slidesPerView:3,
                                    spaceBetween:-350,
                                },
                                1300: {
                                    slidesPerView:3,
                                    spaceBetween:-400,
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
import React, {useEffect, useState} from 'react';
import Navbar from '../components/navbar';
import { sections } from '../data'

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const content = document.getElementById('home');
            const rect = content.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            setIsVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <div id='home' className="relative w-full lg:h-64 sm:h-90">
                <div className='w-full fixed z-50'>
                    <Navbar />
                </div>
                {sections.filter((section) => section.name === "home").map((section, index) => (
                    <>
                        <img
                            src={`/img/${section.img}`} 
                            alt={section.name}
                            className="w-full object-cover z-0"
                        />
                        <div style={{margin: "15% 0 0 0"}} className={`slide-to-top absolute inset-0 block items-center justify-center ${isVisible ? 'slide-in-y' : ''}`} >
                            <h1 style={{ fontSize: "5.5vw", margin: "0 0 -4.3% 0"}} className="text-red-900 russo-one-regular text-center">{section.title}</h1>
                            <h1 style={{ fontSize: "5.5vw"}} className="opacity-25 text-red-900 transform scale-y-[-1] russo-one-regular text-center">{section.title}</h1>
                            <p style={{ fontSize: "1.3vw", margin: "2.5vw 32% 0 32%"}}className='text-center text-white opacity-65 rasa-regular'>{section.description}</p>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default Home;
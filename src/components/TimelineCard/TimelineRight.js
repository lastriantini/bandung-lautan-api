import React, { useEffect, useState, useRef } from 'react';

function TimelineRight(props) {
    const { id, title, description, img } = props;
    const [isVisible, setIsVisible] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current) {
                const rect = contentRef.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility initially in case the element is already in view

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {id === 2 && (
                <div
                    ref={contentRef}
                    className={`grid slide-to-left grid-cols-12 gap-4 ${isVisible ? 'slide-in' : ''}`}
                    style={{ marginBottom: "5%" }}
                >
                    <div className="col-span-4 z-30">
                        <p style={{ fontSize: "5.5vw", margin: "50% 0 0 13%", width: "130%" }} className="anton-regular text-red-900 z-30">{title}</p>
                        <img
                            alt="RedLine.png"
                            className="redline-right"
                            src={`/img/RedLine.png`}
                            style={{ margin: "0 0 0 20wv" }}
                        />
                    </div>
                    <div className="col-span-8">
                        <img
                            src={`/img/${img}`}
                            alt={title}
                            className="w-full z-0"
                        />
                        <p style={{ fontSize: "1.6vw", margin: "0 1.5% 0 0" }} className=" text-justify pt-2 text-red-900 rasa-regular">{description}</p>
                    </div>
                </div>
            )}

            {id === 4 && (
                <div
                    ref={contentRef}
                    className={`grid slide-to-left grid-cols-12 gap-4 ${isVisible ? 'slide-in' : ''}`}
                    style={{ marginBottom: "5%" }}
                >
                    <div className="col-span-4 z-30">
                        <p style={{ fontSize: "5.5vw", margin: "50% 0 0 13%", width: "180%" }} className="anton-regular text-red-900 z-30">{title}</p>
                        <img
                            alt="RedLine.png"
                            className="redline-right"
                            src={`/img/RedLine.png`}
                            style={{ margin: "0 0 0 20wv" }}
                        />
                    </div>
                    <div className="col-span-8">
                        <img
                            src={`/img/${img}`}
                            alt={title}
                            className="w-full z-0"
                        />
                        <p style={{ fontSize: "1.6vw", margin: "0 1.5% 0 0" }} className="pt-2 text-red-900 text-justify rasa-regular">{description}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default TimelineRight;
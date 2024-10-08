import React, { useEffect, useState, useRef } from 'react';

function TimelineLeft(props) {
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
            {(id === 3 || id === 5) && (
                <div
                    ref={contentRef}
                    className={`timeline-left grid slide-to-right grid-cols-12 gap-4 ${isVisible ? 'slide-in' : ''}`}
                    style={{ marginBottom: "5%" }}
                >
                    <div className="img-timeline-left col-span-8">
                        <img
                            src={`/img/${img}`}
                            alt={title}
                            className="w-full z-0"
                        />
                        <p style={{ fontSize: "1.6vw", margin: "0 3% 0 1.5%" }} className="pt-2 desc text-red-900 text-justify rasa-regular">{description}</p>
                    </div>
                    <div className="col-span-4 z-30">
                        <p
                            style={{
                                fontSize: "5.5vw",
                                margin: id === 3 ? "60% 0 0 -35%" : "50% 0 0 -15%",
                                width: "130%"
                            }}
                            className="title-timeline-left anton-regular text-red-900 z-30"
                        >
                            {title}
                        </p>
                        <img
                            alt="RedLine.png"
                            className="redline-left"
                            src={`/img/RedLine.png`}
                            style={{ margin: "0 0 0 20wv" }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default TimelineLeft;

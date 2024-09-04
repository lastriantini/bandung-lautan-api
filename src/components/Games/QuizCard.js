import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const QuizCard = ({ text, onClick, isVisible, isFlipped, resetFlip }) => {
  const [isCardFlipped, setCardFlipped] = useState(isFlipped);

  useEffect(() => {
    if (resetFlip) {
      setTimeout(() => {
        setCardFlipped(false);
        resetFlip();
      }, 1000);
    } else {
      setCardFlipped(isFlipped);
    }
  }, [resetFlip, isFlipped]);

  return (
    <div
      className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 pointer-events-${isVisible ? 'auto' : 'none'}`}
      // style={styles.cardContainer}
    >
      <ReactCardFlip isFlipped={isCardFlipped} flipDirection="vertical">
        <div onClick={onClick} className='bg-gray-300 flex border border-red-900 items-center justify-center cursor-pointer rounded-lg lg:w-[15vw] lg:h-[11vw] xs:w-[30vw] xs:h-[18vw]'>
          <div className='h-[10vw]'>
            <h3 className='lg:text-[1.3vw] xs:text-[2.5vw] text-[#7D0A0A] my-[4vw] rasa-regular'>click to flip</h3>
          </div>
        </div>
        <div onClick={onClick} className='bg-gray-100 border border-red-900 flex items-center justify-center cursor-pointer rounded-lg lg:w-[15vw] lg:h-[11vw] xs:w-[30vw] xs:h-[18vw]'>
          <div className='h-[10vw]'>
            <h3 className='lg:text-[1.3vw] xs:text-[2vw] text-[#7D0A0A] my-[1.6vw] mx-[1.5vw] rasa-regular'>{text}</h3>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default QuizCard;

import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const QuizCard = ({ text, onClick, isVisible, isFlipped, resetFlip }) => {
  const [isCardFlipped, setCardFlipped] = useState(isFlipped);

  useEffect(() => {
    if (resetFlip) {
      // Menutup kembali kartu jika resetFlip di-trigger
      setTimeout(() => {
        setCardFlipped(false);
        resetFlip(); // Reset fungsi flipBack
      }, 1000); // Menunggu 1 detik sebelum menutup kartu kembali
    } else {
      setCardFlipped(isFlipped);
    }
  }, [resetFlip, isFlipped]);

  return (
    <div
      style={{
        ...styles.cardContainer,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <ReactCardFlip isFlipped={isCardFlipped} flipDirection="vertical">
        <div onClick={onClick} style={styles.cardFront} className='border border-red-900 '>
          {/* Kartu kosong sebelum di-flip */}
          <div className='h-[10vw]'>
            <h3 className='text-[#7D0A0A] my-[4vw] rasa-regular'>click to flip</h3>
          </div>
        </div>
        <div onClick={onClick} style={styles.cardBack}>
          <div className='h-[10vw]'>
            <h3 className='text-[#7D0A0A] my-[2vw] mx-[1.5vw] rasa-regular'>{text}</h3>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

const styles = {
  cardContainer: {
    width: '15vw',
    height: '9vw',
    margin: '10px',
    position: 'relative',
  },
  cardFront: {
    width: '100%',
    height: '11vw',
    backgroundColor: '#ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '10px',
  },
  cardBack: {
    width: '100%',
    height: '11vw',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '10px',
  }
};

export default QuizCard;

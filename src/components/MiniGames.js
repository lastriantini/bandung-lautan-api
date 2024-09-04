import React, { useState, useEffect, useMemo } from 'react';
import QuizCard from './Games/QuizCard';

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const shuffleWithoutAdjacentPairs = (cards) => {
  let shuffledCards;
  const tryShuffle = () => {
    shuffledCards = shuffleArray([...cards]);
    return shuffledCards.some((card, index) => {
      const nextCard = shuffledCards[index + 1];
      return nextCard && card.id === nextCard.id;
    });
  };

  while (tryShuffle()) {
    // Continue shuffling until no adjacent pairs are the same
  }

  return shuffledCards;
};

const QuizApp = () => {
  // Memoize questionsAndAnswers to avoid unnecessary re-renders
  const questionsAndAnswers = useMemo(() => [
    { id: 1, question: 'Pencipta lagu Halo-Halo Bandung?', answer: <img src="/img/IsmailMarzuki.jpeg" alt="Ismail Marzuki" style={{ width: '30vw', height: '10vw', marginTop: '-2vw' }} /> },
    { id: 2, question: 'Tanggal peristiwa Bandung Lautan Api?', answer: '23 Maret 1946' },
    { id: 3, question: 'Komandan Divisi III Tentara Republik Indonesia (TRI)?', answer: <img src="/img/KolonelAbdulHarisNasution.png" alt="Kolonel Abdul Haris Nasution" style={{ width: '30vw', height: '10vw', marginTop: '-2vw' }} /> },
    { id: 4, question: 'Pencetus ide untuk membakar Bandung Selatan menjadi lautan api?', answer: 'Mayor Rukana' },
    { id: 5, question: 'Yang ditugaskan dalam penghancuran gudang amunisi tentara sekutu?', answer: <img src="/img/MohammadToha.png" alt="Mohammad Toha" style={{ width: '30vw', height: '10vw', marginTop: '-2vw' }} /> },
    { id: 6, question: 'NICA memberikan senjata kepada bekas anggota?', answer: 'Koninklijk Nederlands Indisch Leger (KNIL)' },
  ], []);

  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const [shouldResetFlip, setShouldResetFlip] = useState(false);

  useEffect(() => {
    const cards = questionsAndAnswers.flatMap(q => [
      { id: q.id, text: q.question, type: 'question', isVisible: true, isFlipped: false },
      { id: q.id, text: q.answer, type: 'answer', isVisible: true, isFlipped: false }
    ]);

    const shuffledCards = shuffleWithoutAdjacentPairs(cards);
    setVisibleCards(shuffledCards);
  }, [questionsAndAnswers]);

  const handleCardClick = (card) => {
    if (shouldResetFlip) return;

    const isAlreadyFlipped = visibleCards.some(c => c.text === card.text && c.isFlipped);

    if (!isAlreadyFlipped && selectedCards.length < 2) {
      const updatedCards = visibleCards.map(c =>
        c.text === card.text ? { ...c, isFlipped: true } : c
      );
      setVisibleCards(updatedCards);
      setSelectedCards([...selectedCards, card]);

      if (selectedCards.length === 1) {
        const [firstCard] = selectedCards;
        if (firstCard.id === card.id && firstCard.type !== card.type) {
          setTimeout(() => {
            setVisibleCards(updatedCards.map(c =>
              c.id === card.id ? { ...c, isVisible: false } : c
            ));
            setScore(prevScore => prevScore + 1);
            setSelectedCards([]);
          }, 1000);
        } else {
          setShouldResetFlip(true);
          setTimeout(() => {
            setVisibleCards(updatedCards.map(c =>
              c.text === firstCard.text || c.text === card.text ? { ...c, isFlipped: false } : c
            ));
            setSelectedCards([]);
            setShouldResetFlip(false);
          }, 1000);
        }
      }
    }
  };

  const isAllMatched = visibleCards.every(card => !card.isVisible);

  return (
    <div className='bg-img'>
      <h1 className='text-center text-[#7D0A0A] lg:text-[2vw] text-bold pt-[2vw] rasa-regular xs:text-[4vw]'>Pasangkan dengan jawaban yang tepat</h1>
      <h1 className='text-center rasa-regular'>Skor: {score}</h1>
      {isAllMatched && <h1 className='text-[#7D0A0A] text-center anton-regular text-[3vw] mt-[10vw]'>Selamat! Anda sudah menyelesaikan permainan!</h1>}
      <div style={styles.container} className='mx-[12vw]'>
        {visibleCards.map((card, index) => (
          <QuizCard
            key={index}
            text={card.text}
            onClick={() => handleCardClick(card)}
            isVisible={card.isVisible}
            isFlipped={card.isFlipped}
            shouldResetFlip={shouldResetFlip}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px'
  }
};

export default QuizApp;

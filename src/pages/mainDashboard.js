import Home from '../components/home';
import Timeline from '../components/Timeline';
import Tokoh from '../components/tokoh';
import { useNavigate } from 'react-router-dom';

function MainDashboard() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/games');
    };

    return (
        <>
            <Home />
            <section id='timeline' style={{ margin: "6vw 0 0 0" }}>
                <Timeline />
            </section>
            <button onClick={handleClick} className='shadow-black shadow text-center bg-[#7D0A0A] text-white text-[1.5vw] mx-[40vw] w-[18vw] mb-[3vw] mt-[-2vw] rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-white hover:border-1 hover:text-[#7D0A0A]'>
                <div className='m-[0.3vw] px-[4vw] py-[0.7vw] rasa-regular font-semibold rounded-full border border-white hover:border-red-900'>MINI GAME</div>
            </button>
            <section id='tokoh' style={{ margin: "0vw 0 0 0" }}>
                <Tokoh />
            </section>
        </>
    )
}

export default MainDashboard
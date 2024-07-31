import Home from '../components/home';
import Timeline from '../components/Timeline';
import Tokoh from '../components/tokoh';

function MainDashboard() {
    return (
        <>
            <Home />
            <section id='timeline' style={{margin: "6vw 0 0 0"}}>
                <Timeline />
            </section>
            <section id='tokoh' style={{margin: "0vw 0 0 0"}}>
                <Tokoh />
            </section>
        </>
    )
}

export default MainDashboard
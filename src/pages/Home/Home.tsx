import "./Home.scss";
import { Hero, Display } from "../../components";


function Home() {
    return (
        <div className="Home">
            <Hero />
            <div className="spacer hero__display" />
            <Display />
            <div className="spacer display__footer" />
        </div>
    )
}

export default Home;

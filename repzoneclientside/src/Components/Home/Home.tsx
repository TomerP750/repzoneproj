import "./Home.css";
import {CountUpComponent} from "../CountUpComponent/CountUpComponent.tsx";


export function Home(): JSX.Element {
    return (
        <div className="Home">
            <CountUpComponent start={0} end={100} duration={2.5}/>
        </div>
    );
}

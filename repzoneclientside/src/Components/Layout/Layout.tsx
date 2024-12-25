import "./Layout.css";
import {Footer} from "../Footer/Footer.tsx";
import {Header} from "../Header/Header.tsx";
import {Routing} from "../Routing/Routing.tsx";
import {useLocation} from "react-router-dom";

export function Layout(): JSX.Element {
    const location = useLocation();
    const hiddenHeaderRoutes = ['/login', '/signup'];
    const showHeader = !hiddenHeaderRoutes.includes(location.pathname);

    return (
        <div className="Layout">
            { showHeader && <Header/>}
            <Routing/>
            <Footer/>
        </div>
    );
}

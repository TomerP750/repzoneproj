import "./Routing.css";
import {Route, Routes} from "react-router-dom";
import {Login} from "../Login/Login.tsx";
import {NotFound} from "../NotFound/NotFound.tsx";
import {SignUp} from "../SignUp/SignUp.tsx";
import {Home} from "../Home/Home.tsx";


export function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path={"/"} Component={Home}/>
                <Route path={"/login"} Component={Login}/>
                <Route path={"/signup"} Component={SignUp}/>






                <Route path={"*"} Component={NotFound}/>
            </Routes>
        </div>
    );
}

import {Search } from "@mui/icons-material";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import "./Header.css";
import { NavLink } from "react-router-dom";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export function Header(): JSX.Element {
    return (
        <>
            <div className="Header">
                <span className={"free-shipping"}>Free Shippings on orders above 100$</span>
            </div>

            <div className={"header-content"}>
                <div className={"logo-and-categories"}>
                <NavLink to={"/"} className={"Logo"}>RepZone</NavLink>
                {/*<h3>Gym Equipment</h3>*/}
                {/*<h3>CrossFit</h3>*/}
                </div>

                <div className={"icons"}>
                    <NavLink to={"login"}><PersonOutlineOutlinedIcon style={{ fontSize: '2.5rem', color:'white'}}/></NavLink>
                    <Search style={{ fontSize: '2.5rem' }} />
                    <ShoppingCartTwoToneIcon style={{ fontSize: '2.5rem' }} />
                </div>
            </div>
        </>

    );
}

import "./Footer.css";
import {NavLink} from "react-router-dom";

export function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <div className={"sb_footer section_padding"}>
                <div className={"sb_footer-links"}>
                    <div className={"sb_footer-links_div"}>
                        <h4>Title 1</h4>
                        <NavLink className={"link"} to={"#"}>Category1</NavLink>
                        <NavLink className={"link"} to={"#"}>Category2</NavLink>
                        <NavLink className={"link"} to={"#"}>Category3</NavLink>
                        <NavLink className={"link"} to={"#"}>Category4</NavLink>
                    </div>
                    <div className={"sb_footer-links_div"}>
                        <h4>Resources</h4>
                        <NavLink className={"link"} to={"/About"}>About</NavLink>
                        <NavLink className={"link"} to={"/About"}>About</NavLink>
                        <NavLink className={"link"} to={"/About"}>About</NavLink>
                        <NavLink className={"link"} to={"/About"}>About</NavLink>
                    </div>
                    <div className={"sb_footer-links_div"}>
                        <h4>Company</h4>
                        <NavLink className={"link"} to={"/About"}>About</NavLink>
                        <NavLink className={"link"} to={"/About"}>Press</NavLink>
                        <NavLink className={"link"} to={"/About"}>Career</NavLink>
                        <NavLink className={"link"} to={"/About"}>Contact</NavLink>
                    </div>
                    <div className={"sb_footer-links_div"}>
                        <h4>Socials</h4>
                        <div className={"socialmedia"}>
                            <NavLink className={"link"} to={"#"}>Facebook</NavLink>
                            <NavLink className={"link"} to={"#"}>YouTube</NavLink>
                            <NavLink className={"link"} to={"#"}>Instagram</NavLink>
                            <NavLink className={"link"} to={"#"}>X</NavLink>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className={"sb_footer-below"}>
                    <div className={"sb_footer-copyright"}>
                        <p>
                            {new Date().getFullYear()} RepZone. All right reserved
                        </p>
                    </div>
                    <div className={"sb_footer-below-links"}>
                        <NavLink className={"link"} to={"/About"}>About</NavLink>
                        <NavLink className={"link"} to={"/termsofservice"}>Terms of Service</NavLink>
                        <NavLink className={"link"} to={"/privacypolicy"}>Privacy Policy</NavLink>
                        <NavLink className={"link"} to={"/shippingpolicy"}>Shipping Policy</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

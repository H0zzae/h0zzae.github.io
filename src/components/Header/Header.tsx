import React from "react";
import {Link} from "react-router-dom";
type HeaderProps = {
    link?: string
}
const Header = ({link}: HeaderProps) => {
    return(
        <div>
            <ul>
                <li>
                    <Link to={"/"}>About</Link>
                </li>
                <li>
                    <Link to={"project"}>Project</Link>
                </li>
            </ul>
        </div>
    )
}
Header.defaultProps ={
    link:"project"
}
export default Header;
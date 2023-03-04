import React, {useState} from 'react'
import "./navbar.scss"
import {ArrowDropDown, Notifications, Search} from "@material-ui/icons";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    // console.log(window.pageYOffset)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return ()=> {
            window.onscroll = null
        }
    }
    // console.log(isScrolled)
    return (
        <div className={isScrolled?"navbar scrolled":"navbar"}>
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""/>
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search/>
                    <span>Kid</span>
                    <Notifications className="icons"/>
                    <img src="https://avatars.githubusercontent.com/u/79470399?v=4" alt=""/>
                    <div className="profile">
                        <ArrowDropDown className="icons"/>
                        <div className="options">
                            <span>Setting</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar

import React from "react"
import "./components.css"

function Navbar() {
    return (
        <>
            <div className="navbar">
                <h3>Blogging</h3>
                <div className="navbar-navigation">
                    <ul>
                        <li className="active">Home</li>
                        <li>Network</li>
                        <li>Events</li>
                    </ul>
                </div>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg" alt="" />
            </div>
            <hr />
        </>
    )
}

export default Navbar;
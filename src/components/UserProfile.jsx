import React from "react"
import Navbar from "./Navbar.jsx"
import Posts from "./Posts.jsx";


function UserProfile() {

    return (
        <div className="user-profile">
            <Navbar />
            <Posts />
        </div>
    )
}

export default UserProfile;
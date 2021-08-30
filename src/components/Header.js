import React from "react"

const Header = () => {
  return (
    <div className="navbar">
        <div className="navbar-bar">
            <div className="navbar-bar-brand">
                <img src="https://socialbrothers.nl/wp-content/themes/social_brothers/assets/SBlogo.svg" alt="social brothers logo SVG"></img>
            </div>
            <div className="navbar-bar-items">
                <div className="navbar-bar-titel">
                    <div>Home</div>
                </div>
                <div className="navbar-bar-titel">
                    Blog
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
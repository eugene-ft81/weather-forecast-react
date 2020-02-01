import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 className="header">Weather Forecast</h1>
                <p className="header_details">weather forecast for a given city and country</p>
            </div>
        )
    }
}

export default Header;
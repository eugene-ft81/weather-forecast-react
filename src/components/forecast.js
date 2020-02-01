import React from "react";

class Forecast extends React.Component{
    render(){
        return(
            <div className="forecast">
                {
                    this.props.country && this.props.city && <p className="forecast_key">Location: 
                        <span className="forecast_value">  {this.props.city}, {this.props.country}</span>
                    </p> 
                }
                {
                    this.props.temperature && <p className="forecast_key">Temperature: 
                        <span className="forecast_value">  {this.props.temperature}</span>
                    </p>
                }
                {
                    this.props.error && <p className="forecast_error">{this.props.error}</p>
                }
            </div>
        )
    }
}

export default Forecast;
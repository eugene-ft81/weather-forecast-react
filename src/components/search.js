import React from "react";

class Search extends React.Component{
    render(){
        return(
                <form onSubmit = {this.props.loadWeather}>
                    <input type="text" name="city" placeholder="city"/>
                    <input type="text" name="country" placeholder="country"/>
                    <button>Get Forecast</button>
                </form>
        )
    }
}

export default Search;
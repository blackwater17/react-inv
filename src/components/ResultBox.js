import React from 'react';
import { NavLink } from 'react-router-dom';



class ResultBox extends React.Component {


    render() {
        return (

                                
            <div className="result">


                <div className="title-area">
                    
                    {/*<span>{this.props.Title}</span> */}
                    <NavLink to={"/title?imdb=" + this.props.imdbID}  exact={true}> <span>{this.props.Title}</span> </NavLink>
                    
                </div> 


                <div className="imdb-id-area">{this.props.imdbID}</div>
                <div className="release-date">{this.props.Year}</div>
                <div className="type">{this.props.Type}</div>
            </div>



        )
    
    }
}


    




export default (ResultBox);


    
    
import React from 'react';



class Title extends React.Component {

    state = {
        data: {},
        data_arr: [],
        cover: null,
        skip: ["Title", "Response", "Poster", "Ratings"],
        skip_values: ["N/A", ""]
    }



    componentDidMount() {

        document.querySelector(".data-container").display = "none"

        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());

        let imdbID = params.imdb
        
        let url = "https://omdbapi.com/?i=" + imdbID + "&apikey=45564a3"


        fetch(url).then((res) => {
            res.json().then((data) => {
                
                this.setState(() => ({
                    data_arr: Object.entries(data),
                    cover: data.Poster,
                    data
                }))

                document.querySelector(".data-container").display = "block"

            })
        })
        


    }


    componentDidUpdate() {
        console.log(this.state.data);
    }




    render() {
        return (

            <>


            {/* <NavLink to="/" exact={true} > <div>GO BACK</div> </NavLink> */}

            <div className="data-container">

                <h1 className="rel-title">

                       {this.state.data.Title}
                       <span> {this.state.data.Director !== "N/A" && this.state.data.Director !== undefined && "by " + this.state.data.Director}</span>
                       <span> {this.state.data.Director === "N/A" && this.state.data.Director !== undefined && " by Various Directors"}</span>


                </h1>



                {this.state.cover && <img src={this.state.cover} alt="poster"></img>}
                
       

                {this.state.data_arr.map((e) => {

                    return ( 
                        
                    this.state.skip.includes(e[0]) === false && this.state.skip_values.includes(e[1].toString()) === false && 
                    
                    <li key={e[0].toString()}>  {e[0]}:  <span>  {e[1].toString()}  </span>       </li>

                    )

                })}



            {this.state.data.Ratings && this.state.data.Ratings.map((rating, i) => {

            return ( 
                
            <li key={i}> {rating.Source} Rating: <span>{rating.Value} </span>  </li>

            )

            })}





            </div>




        
        </>

        )
    
    }
}


    


export default Title;


    
    
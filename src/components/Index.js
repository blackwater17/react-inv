import React from 'react';
import { connect } from 'react-redux';
import ResultBox from './ResultBox'
import { addAllReleases } from '../actions/releases'
import selectPaginations from '../selectors/selectPaginations';
import { setPage, setYear, setSearchTerm, setResultsCount } from '../actions/filters'




class Index extends React.Component {

    state = {
        results_count: 0
    }


    changePage = (page_num) => {    
        this.props.dispatch(setPage(page_num))
    }


    handleInput = () => {
        let search_term = document.querySelector(".search").value
        this.props.dispatch(setSearchTerm(search_term))
    }

    handleYearInput = () => {
       let year = document.querySelector(".year").value
       this.props.dispatch(setYear(year))
    }



    submitForm = (e) => {
        e.preventDefault()
  
        let year = document.querySelector(".year").value
        let search_term = document.querySelector(".search").value 
        let type = document.querySelector("#search-type").value

        let url = "http://www.omdbapi.com/?apikey=45564a3&s=" + search_term + "&y=" + year + "&type=" + type
        
        fetch(url).then((res) => {
            res.json().then((data) => {
             
                let results_count = parseInt(data.totalResults)
              
                this.setState(() => ({
                    results_count
                }))
                 
                this.props.dispatch(setResultsCount(results_count))


                let results = data.Search // 10 item max

                this.props.dispatch(addAllReleases(results))

               

            })
        })

        this.changePage(1) // always move to first page

    }



    changePage = (page_num) => {    

        this.props.dispatch(setPage(page_num))

        let year = document.querySelector(".year").value
        let search_term = document.querySelector(".search").value 
        let type = document.querySelector("#search-type").value

    
        if (search_term === "") search_term = this.props.filters.search_term
        if (year === "") year = this.props.filters.year
        

        let url = "http://www.omdbapi.com/?apikey=45564a3&s=" + search_term + "&y=" + year + "&type=" + type + "&page=" + page_num
        
        fetch(url).then((res) => {
            res.json().then((data) => {
                
                let results = data.Search // 10 item max
                this.props.dispatch(addAllReleases(results))

            })
        })



    }

    componentDidMount(){
        
        if (this.props.releases.length === 0 )  { // initial pokemon fetch

            let year = ""
            let search_term = "pokemon"
            let type = ""

            this.props.dispatch(setSearchTerm("pokemon"))

    

            let url = "http://www.omdbapi.com/?apikey=45564a3&s=" + search_term + "&y=" + year + "&type=" + type 
        
            fetch(url).then((res) => {
                res.json().then((data) => {

                    let results_count = parseInt(data.totalResults)
              
                    this.setState(() => ({
                        results_count
                    }))
                     
                    this.props.dispatch(setResultsCount(results_count))
                    
                    let results = data.Search // 10 item max
                    this.props.dispatch(addAllReleases(results))
    
                })
            })

        }
    }





    render() {

        return (

            <>

            <img src="https://i.pinimg.com/originals/10/41/5d/10415d2d0accbbd6ae2ce6018fea86b9.jpg" alt="poster"></img>


            <form onSubmit={(e) => this.submitForm(e)}>
                <div className="search-container">
                    <input type="text" placeholder="Search title" className="search" spellCheck="false" onInput={this.handleInput} autoFocus></input>
                    <input type="number" placeholder="Year" className="year" spellCheck="false" onInput={this.handleYearInput} ></input>
                
                    <select name="search-type" id="search-type">
                        <option value="">All Results</option>
                        <option value="movie">Movies</option>
                        <option value="series">Shows</option>
                        <option value="episode">Episodes</option>
                    </select>

                </div>


                <div className="search-btn-container ">
                    <button id="search-btn" onClick={this.submitForm}>Search!</button>
                </div>

            </form>
            

    
            <div className="results-container">

                  <div className="table-header">
             
                    <div className="title-area col-header">Title</div>  
                    <div className="imdb-id-area col-header">IMDb ID</div>
                    <div className="release-date col-header">Release Date</div>
                    <div className="type col-header">Type</div>
            
                  </div>
                  
                  {this.props.releases.map((release, i) =>  <ResultBox key={i}  {...release }  /> )}
             </div>
          


             <div className="pagination-container">
                    
                    <div className="pagination-box" onClick={() => this.changePage(1)}>&lt;&lt;</div>

                    {this.props.paginations.map((pagination) =>  <div className={pagination.className} key={pagination.page_num} onClick={() => this.changePage(pagination.page_num)}>{pagination.page_num}</div> )}
                    
                    <div className="pagination-box" onClick={() => this.changePage(Math.ceil(this.state.results_count/10))}>&gt;&gt;</div>
                
                </div>




            </>
        
        )
    }

}











const mapStateToProps = (state) => {

    return {
        releases: state.releases,
        filters: state.filters,
        paginations: selectPaginations(state.releases, state.filters)
    }
}




export default connect(mapStateToProps)(Index);


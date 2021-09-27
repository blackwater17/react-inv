export const setPage = (page = 1) => ({
    type: "SET_PAGE",
    page
})

export const setYear = (year = null) => ({
    type: "SET_YEAR",
    year
})


export const setSearchTerm = (search_term = "") => ({
    type: "SET_SEARCH_TERM",
    search_term
})



export const setResultsCount = (

    results_count = 0

) => ({

    type: "SET_RESULTS_COUNT",
    results_count
    
})

       
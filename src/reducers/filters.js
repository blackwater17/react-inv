const filtersReducerDefaultState = {page: 1} 

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_PAGE":
            return {
                ...state,
                page: action.page,
            }

        case "SET_YEAR":
            return {
                ...state,
                year: action.year,
            }

        case "SET_SEARCH_TERM":
            return {
                ...state,
                search_term: action.search_term
            }

        case "SET_RESULTS_COUNT":
            return {
                ...state,
                results_count: action.results_count
            }
            
        default:
            return state;
    }
}

export default filtersReducer;
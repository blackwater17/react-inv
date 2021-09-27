const releasesReducerDefaultState = []

const releasesReducer = (state = releasesReducerDefaultState, action) => {
    switch (action.type) {       

        case "ADD_ALL_RELEASES":
            return action.releases


        default:
            return state;
    }
}







export default releasesReducer;
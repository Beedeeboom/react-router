//(currentState, action) => returns a newState
//Reducer function => accepts current state and action and will return a new state
export default function (state, action) {
    //in order to determin what that new state will be we can use a switch statement
    switch (action.type) {
        case "setCategories": { //this can be called anything
            return {
                ...state,
                categories: action.data
            }
        }
        case "setEntries": {
            return {
                ...state,
                entries: action.data
            }
        }
        //if none of the above states apply it will return the default state (won't change anything)
        default: 
        return state 
    }
}
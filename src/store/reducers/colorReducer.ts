const initState = {
    data: [],
    selected: ''
}

export const colorReducer = (state: ColorState = initState, action: ColorActions) => {

    switch(action.type){  

        case 'GET_COLORS':
            return {
                ...state,
            data: action.data
            }  

        case 'SET_SELECTED':
            return {
                ...state,
            selected: action.data
            } 

        default: 
            return state    
    }
}
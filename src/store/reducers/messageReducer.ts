const initState = {
    data: [],
}

export const messageReducer = (state: MessageState = initState, action: MessageActions) => {

    switch(action.type){  

        case 'GET_MESSAGES':
            return {
                ...state,
                data: action.data
            }  

        default: 
            return state    
    }
}
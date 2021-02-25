import data from '../../data/data.json';

export const getMessages = () => (dispatch: Dispatch) => {
    const { messages } = data;
    dispatch({ type: "GET_MESSAGES", data: messages });
}
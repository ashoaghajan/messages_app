import data from '../../data/data.json';

export const getColors = () => (dispatch: Dispatch) => {
    const { colors } = data;
    dispatch({ type: "GET_COLORS", data: colors });
}

export const setSelected = (color: string) => (dispatch: Dispatch) => {
    dispatch({ type: "SET_SELECTED", data: color });
}
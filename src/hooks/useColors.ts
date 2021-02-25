import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getColors, setSelected } from '../store/actions/colorActions';
import useStyles from '../styles/fieldStyles';

export const useColors = () => {

    const { data: colors, selected } = useSelector((state: RootState) => state.colors);
    const [state, setState] = useState(selected);
    const dispatch = useDispatch();
    const classes = useStyles();


    useEffect(() => {
        setTimeout(() => {
            dispatch(getColors());
        }, 1000);
        // eslint-disable-next-line
    },[]);


    const handleSelect = (e: any) => {
        const { value } = e.target;
        setState(value);
        dispatch(setSelected(value));
    }

    return { classes, state, colors, handleSelect }
}
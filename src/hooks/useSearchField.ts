import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useStyles from '../styles/fieldStyles';
import _ from 'lodash';

export const useSearchField = (setFilteredMessages: React.Dispatch<React.SetStateAction<Message[]>>) => {
    
    const classes = useStyles();
    const [filter, setFilter] = useState('');
    const messages = useSelector((state: RootState) => state.messages.data);


    useEffect(() => {
        delaySearch(filter, messages);
        // eslint-disable-next-line
    }, [filter]);


    const delaySearch = useRef(_.debounce((filter: string, array: Message[]) => {
        if(filter){
            const filteredArray = array.filter(item => item.body.toLowerCase().includes(filter.toLowerCase()))
            setFilteredMessages(filteredArray);
        }
        else{
            setFilteredMessages(array);
        } 
    }, 500)).current;

    return { classes, filter, setFilter }
}
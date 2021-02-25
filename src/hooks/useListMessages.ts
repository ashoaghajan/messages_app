import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from '../store/actions/messageActions';
import useStyles from '../styles/listMessagesStyle';

export const useListMessages = () => {

    const messages = useSelector((state: RootState) => state.messages.data);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [filteredMessages, setFilteredMessages] = useState(messages);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            dispatch(getMessages());
        }, 1000);
        // eslint-disable-next-line
    },[]);

    useEffect(() => {
        messages.length && setFilteredMessages(messages);
        messages.length && setLoading(false);
          // eslint-disable-next-line
    },[messages]);

    return { classes, loading, filteredMessages, setFilteredMessages }
}
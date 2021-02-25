import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import Message from '../components/Message';
import SearchField from '../components/SearchField';
import { useListMessages } from '../hooks/useListMessages';

export interface MessagesProps {
    
}
 
const Messages: React.SFC<MessagesProps> = () => {

    const { classes, loading, filteredMessages, setFilteredMessages } = useListMessages();

    return ( 
        <>
            <SearchField setFilteredMessages={setFilteredMessages} />
            <Grid container className={classes.container}>
                {loading ? <CircularProgress /> : filteredMessages.length ? filteredMessages.map(message => (
                    <Grid key={message.id} item lg={7}>
                        <Message message={message}/>
                    </Grid>
                )) : <Typography>no messages</Typography>}
            </Grid>
        </>
     );
}
 
export default Messages;
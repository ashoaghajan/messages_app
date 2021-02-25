import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Typography } from '@material-ui/core';
import useStyles from '../styles/messageStyles';

export interface MessageProps {
    message: Message
}
 
const Message: React.SFC<MessageProps> = ({ message }) => {

    const classes = useStyles();
    const selected = useSelector((state: RootState) => state.colors.selected);

    return ( 
        <Card className={classes.card}>
            <div className={classes.header}>
                <Typography variant='h6'>{message.sender}</Typography>
                <Typography variant='h6'>{message.date}</Typography>
            </div>
            <Typography className={classes.body} style={{ color: selected }} variant='body1' gutterBottom>{message.body}</Typography>
        </Card>
     );
}
 
export default Message;
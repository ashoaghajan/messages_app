import React from 'react';
import { useSearchField } from '../hooks/useSearchField';
import { Grid, TextField } from '@material-ui/core';

export interface SearchFieldProps {
    setFilteredMessages: React.Dispatch<React.SetStateAction<Message[]>>
}
 
const SearchField: React.SFC<SearchFieldProps> = ({ setFilteredMessages }) => {

   const { classes, filter, setFilter } = useSearchField(setFilteredMessages);

    return ( 
        <Grid container className={classes.container} >
            <Grid item className={classes.input}>
                <TextField name='filter' variant='outlined' label="Filter" 
                    value={filter} onChange={(e) => setFilter(e.target.value)}/>
            </Grid>
        </Grid>
    );
}
 
export default SearchField;

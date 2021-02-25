import React from 'react';
import { useColors } from '../hooks/useColors';
import { Grid, InputLabel, Select, MenuItem } from '@material-ui/core';

export interface ColorsProps {
    
}
 
const Colors: React.SFC<ColorsProps> = () => {

    const { classes, state, colors, handleSelect } = useColors();

    return ( 
        <Grid className={classes.container}>
            {colors.length ? <Grid item className={classes.input}>
                <InputLabel className={classes.label}>Pick a Color</InputLabel>
                <Select value={state} className={classes.select} style={{ color: state }} onChange={handleSelect} required>
                    {colors.map(option => (
                        <MenuItem value={option.color} key={option.id} style={{ color: option.color }}>{option.color}</MenuItem>
                    ))}
                </Select>
            </Grid> : null}
        </Grid>
     );
}
 
export default Colors;
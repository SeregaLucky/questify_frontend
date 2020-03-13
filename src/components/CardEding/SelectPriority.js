import React from 'react';
import clsx from 'clsx';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const useStylesFC = makeStyles({
  root: {
    color: 'var(--light-gray)',
  },
  formControl: {
    minWidth: 120,
  },
  input: {},
});

const useStylesSelect = makeStyles({
  // select: {
  //     "&:before": {
  //         borderColor: "white"
  //     },
  //     "&:after": {
  //         borderColor: "white"
  //     }
  // },
  icon: {
    fill: 'var(--light-blue)',
  },
});

const useStylesPlaceholder = makeStyles({
  root: {
    '&$disabled': {
      color: 'red',
    },
  },
  disabled: {},
  // },
  // button: {
  //     "&.MuiInputBase-input": {
  //         "&p": {
  //             color: "red"
  //         }
  //     }
  // }
});

// const styles = {
//     formControl: {
//         minWidth: 120,
//     },
//     selectEmpty: {
//         border: "none"
//     },
//     "MuiInput-underline:before": {
//         borderBottom: "none"
//     }
// }

const SelectPriority = () => {
  const classes = useStylesFC();
  const classes2 = useStylesSelect();
  const classes3 = useStylesPlaceholder();
  const [priority, setPriority] = React.useState('');
  const handleChange = event => {
    setPriority(event.target.value);
  };
  return (
    <FormControl
      classes={{
        root: classes.root,
        input: classes.input,
      }}
    >
      <Select
        value={priority}
        onChange={handleChange}
        displayEmpty
        disableUnderline
        // className={}
        classes={{
          icon: classes2.icon,
        }}
      >
        <MenuItem
          button
          value=""
          disabled
          classes3={{
            root: classes3.root,
            disabled: classes3.disabled,
          }}
        >
          <p style={{ color: 'red' }}>Priority</p>
        </MenuItem>
        <MenuItem value={0}>Low</MenuItem>
        <MenuItem value={1}>Normal</MenuItem>
        <MenuItem value={2}>High</MenuItem>
      </Select>
    </FormControl>
  );
};
export default SelectPriority;

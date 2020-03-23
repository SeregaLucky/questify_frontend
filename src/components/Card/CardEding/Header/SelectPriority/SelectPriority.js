import React from 'react';
import { Select, MenuItem, SvgIcon } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import * as styles from '../../styles/materialUIStyles';

const SelectPriority = ({ value, onChangeDiff }) => {
  const select = styles.selectStyles();
  const placeholder = styles.placeholderStyles();
  const iconClasses = styles.iconStyles();

  return (
    <>
      <Select
        value={value}
        onChange={onChangeDiff}
        displayEmpty
        disableUnderline
        classes={{
          icon: select.icon,
          select: select.select,
        }}
      >
        <MenuItem
          value=""
          disabled
          classes={{
            root: placeholder.root,
          }}
        >
          Difficulty
        </MenuItem>
        <MenuItem
          value="Easy"
          classes={{
            root: placeholder.root,
          }}
        >
          <SvgIcon
            fontSize="inherit"
            color="primary"
            classes={{
              root: iconClasses.root,
              fontSizeInherit: iconClasses.fontSizeInherit,
              colorPrimary: iconClasses.colorPrimary,
            }}
          >
            <FiberManualRecordIcon />
          </SvgIcon>
          Easy
        </MenuItem>
        <MenuItem
          value="Normal"
          classes={{
            root: placeholder.root,
          }}
        >
          <SvgIcon
            color="secondary"
            fontSize="inherit"
            classes={{
              root: iconClasses.root,
              fontSizeInherit: iconClasses.fontSizeInherit,
              colorSecondary: iconClasses.colorSecondary,
            }}
          >
            <FiberManualRecordIcon />
          </SvgIcon>
          Normal
        </MenuItem>
        <MenuItem
          value="Hard"
          classes={{
            root: placeholder.root,
          }}
        >
          <SvgIcon
            color="action"
            fontSize="inherit"
            classes={{
              root: iconClasses.root,
              fontSizeInherit: iconClasses.fontSizeInherit,
              colorAction: iconClasses.colorAction,
            }}
          >
            <FiberManualRecordIcon />
          </SvgIcon>
          High
        </MenuItem>
      </Select>
    </>
  );
};
export default SelectPriority;

import React from 'react';
import { Select, MenuItem, SvgIcon } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import * as styles from '../CardEding/styles/materialUIStyles';

const Easy = () => {
  const iconClasses = styles.iconStyles();
  return (
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
  );
};

const Normal = () => {
  const iconClasses = styles.iconStyles();
  return (
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
  );
};

const Hard = () => {
  const iconClasses = styles.iconStyles();
  return (
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
  );
};

export default {
  Easy,
  Normal,
  Hard,
};

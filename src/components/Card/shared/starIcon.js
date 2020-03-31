import React from 'react';
import { IconButton } from '@material-ui/core';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { header } from '../CardEding/styles/cardStyling';

const StarIcon = () => {
  const headerStyles = header();
  return (
    <>
      <IconButton
        aria-label="settings"
        color="secondary"
        classes={{
          root: headerStyles.startRoot,
        }}
      >
        <StarRoundedIcon />
      </IconButton>
    </>
  );
};

export default StarIcon;

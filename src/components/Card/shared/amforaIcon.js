import React from 'react';
import { IconButton } from '@material-ui/core';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { header } from '../Challenge/challenge.styles';

const AmforaIcon = () => {
  const headerStyles = header();
  return (
    <>
      <IconButton
        aria-label="settings"
        color="primary"
        classes={{
          root: headerStyles.root,
        }}
      >
        <EmojiEventsIcon />
      </IconButton>
    </>
  );
};

export default AmforaIcon;

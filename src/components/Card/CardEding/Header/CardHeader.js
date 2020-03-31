import React from 'react';
import T from 'prop-types';
import { CardHeader, IconButton } from '@material-ui/core';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import SelectPriority from './SelectPriority';
import { header } from '../styles/cardStyling';

const CardHeaderSection = ({ value, onChange }) => {
  const headerStyles = header();
  return (
    <>
      <CardHeader
        action={
          <>
            <SelectPriority onChangeDiff={onChange} value={value} />
            <IconButton
              aria-label="settings"
              color="secondary"
              classes={{
                root: headerStyles.startRoot,
                // colorInherit: headerStyles.starColor,
              }}
            >
              <StarRoundedIcon />
            </IconButton>
          </>
        }
        classes={{
          root: headerStyles.root,
          action: headerStyles.action,
        }}
      />
    </>
  );
};
CardHeaderSection.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
};
export default CardHeaderSection;

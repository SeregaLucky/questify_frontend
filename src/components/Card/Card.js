import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import theme from '../CardEding/styles/muiTheme';
import { general } from '../CardEding/styles/cardStyling';
import CardEding from '../CardEding/CardEding';

const CardContainer = ({ qestData }) => {
  const [isEditing, cancelEditing] = useState(false);
  const generalStyles = general();
  return (
    <ThemeProvider theme={theme}>
      <Card className={generalStyles.root}></Card>
    </ThemeProvider>
  );
};

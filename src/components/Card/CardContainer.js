import React, { useState } from 'react';
import { isToday, isTomorrow, format, isValid, parseISO } from 'date-fns';
import { ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import theme from '../CardEding/styles/muiTheme';
import { general } from '../CardEding/styles/cardStyling';
import Content from './Card';
import CardEditing from '../CardEding/CardEding';

const CardContainer = ({ questData }) => {
  const [isEditing, setEditing] = useState(false);
  const [difficulty, setDifficulty] = React.useState(
    questData.difficulty || '',
  );
  const [name, setText] = React.useState(questData.name || '');
  const [dueDate, setSelectedDate] = React.useState(
    parseISO(questData.dueDate) || new Date(),
  );
  const [group, setGroup] = React.useState(questData.group || '');

  const handleDifficulty = ({ target }) => setDifficulty(target.value);
  const handleChangeText = ({ target }) => setText(target.value);
  const handleDateChange = date => setSelectedDate(date);

  const handleDestination = ({ target }) => setGroup(target.value);
  // const userId = useSelector(store => authSelectors.getUserId(store));
  const userId = '5e68c62a4a36bf664bacf714';

  const handleEditing = () =>
    isEditing ? setEditing(true) : setEditing(false);

  const generalStyles = general();
  return (
    <ThemeProvider theme={theme}>
      <Card className={generalStyles.root}>
        {!isEditing && (
          <Content questData={questData} onClick={handleEditing} />
        )}
        {isEditing && (
          <CardEditing questData={questData} cancelEditing={handleEditing} />
        )}
      </Card>
    </ThemeProvider>
  );
};

export default CardContainer;

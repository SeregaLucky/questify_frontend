import React, { useState } from 'react';
import { parseISO } from 'date-fns';
import { ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import theme from './CardEding/styles/muiTheme';
import { general } from './CardEding/styles/cardStyling';
import Content from './CardComponent/Card';
import CardEditing from './CardEding/CardEding';

const CardContainer = ({ questData, newCard }) => {
  //State
  const [isEditing, setEditing] = useState(newCard || false);
  const [difficulty, setDifficulty] = React.useState(
    questData ? questData.difficulty : '',
  );
  const [name, setText] = React.useState(questData ? questData.name : '');
  const [dueDate, setSelectedDate] = React.useState(
    questData ? parseISO(questData.dueDate) : new Date(),
  );
  const [group, setGroup] = React.useState(questData ? questData.group : '');
  const questId = questData ? questData.questId : '';
  const done = questData ? questData.done : false;

  //----------handlers------------
  const handleDifficulty = ({ target }) => setDifficulty(target.value);
  const handleChangeText = ({ target }) => setText(target.value);
  const handleDateChange = date => setSelectedDate(date);
  const handleDestination = ({ target }) => setGroup(target.value);
  const handleEditing = () =>
    isEditing ? setEditing(false) : setEditing(true);

  const generalStyles = general();
  return (
    <ThemeProvider theme={theme}>
      <Card className={generalStyles.root}>
        {!isEditing && (
          <Content
            questData={{
              difficulty,
              name,
              dueDate,
              group,
              questId: questId,
              done,
            }}
            onClick={handleEditing}
          />
        )}
        {isEditing && (
          <CardEditing
            questData={{ difficulty, name, dueDate, group }}
            cancelEditing={handleEditing}
            handleDifficulty={handleDifficulty}
            handleChangeText={handleChangeText}
            handleDateChange={handleDateChange}
            handleDestination={handleDestination}
          />
        )}
      </Card>
    </ThemeProvider>
  );
};

export default CardContainer;

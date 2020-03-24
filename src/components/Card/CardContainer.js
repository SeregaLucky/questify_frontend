import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { parseISO } from 'date-fns';
import { ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import theme from './CardEding/styles/muiTheme';
import { general } from './CardEding/styles/cardStyling';
import Content from './CardComponent/Card';
import CardEditing from './CardEding/CardEding';
import CompletedModal from '../CompletedModal/CompletedModal';
import tasksOperations from '../../redux/tasks/tasksOperations';

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
  const [done, setDone] = React.useState(questData ? questData.done : false);

  // --------- Ania's modal logic----------
  const [modal, setOpenModal] = React.useState(false);
  //----------------------------------------

  const questId = questData ? questData.questId : '';

  //----------handlers------------
  const dispatch = useDispatch();
  const handleDifficulty = ({ target }) => setDifficulty(target.value);
  const handleChangeText = ({ target }) => setText(target.value);
  const handleDateChange = date => setSelectedDate(date);
  const handleDestination = ({ target }) => setGroup(target.value);
  const handleDone = () => {
    setDone(true);
    dispatch(tasksOperations.updateQuest(questId, { done }));
  };
  const handleDelete = () => dispatch(tasksOperations.deleteQuest(questId));

  // --------- Ania's modal logic----------
  //-------- Delete--------
  const handleOpenCloseModal = () =>
    modal ? setOpenModal(false) : setOpenModal(true);
  const handleDeleteWithModal = () => {
    handleDelete();
    handleOpenCloseModal();
  };
  //-------- Done -------------
  const handleDoneWithModal = () => {
    if (questData.questId && !done) handleDone();
    handleOpenCloseModal();
  };
  //----------------------------------------
  const handleEditing = () =>
    isEditing ? setEditing(false) : setEditing(true);

  const generalStyles = general();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Card className={generalStyles.root}>
          {!isEditing && (
            <Content
              questData={{
                difficulty,
                name,
                dueDate,
                group,
                done,
                questId: questId,
              }}
              onClickEditing={handleEditing}
              onClickDone={handleOpenCloseModal}
              onClickDelete={handleDeleteWithModal}
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
      {modal && (
        <CompletedModal
          taskName={name}
          onCloseModal={handleOpenCloseModal}
          onCloseQuest={handleDoneWithModal}
        />
      )}
    </>
  );
};

export default CardContainer;

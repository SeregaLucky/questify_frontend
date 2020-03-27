import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseISO } from 'date-fns';
import { ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import theme from './CardEding/styles/muiTheme';
import { general } from './CardEding/styles/cardStyling';
import Content from './CardComponent/Card';
import CardEditing from './CardEding/CardEding';
import CompletedModal from '../CompletedModal/CompletedModal';
import tasksOperations from '../../redux/tasks/tasksOperations';
import authSelectors from '../../redux/auth/authSelectors';
import Challenge from './Challenge/Challenge';
//updateFields: {challengeSendToUser: false}
//userId: "5e792bb0f3a5ab0f6260b603"

const CardContainer = ({ questData, newCard }) => {
  //-------- State -----------
  const [isEditing, setEditing] = useState(newCard || false);
  const [difficulty, setDifficulty] = React.useState(
    questData ? questData.difficulty : '',
  );
  const [name, setText] = React.useState(questData ? questData.name : '');
  const [dueDate, setSelectedDate] = React.useState(
    questData ? parseISO(questData.dueDate) : new Date(),
  );
  const [group, setGroup] = React.useState(questData ? questData.group : '');
  const [challengeSendToUser, setAccept] = React.useState(
    questData ? questData.challengeSendToUser : false,
  );
  const [modalComplete, setOpenModalComplete] = React.useState(false);

  //-------- Other data -----------
  const questId = questData ? questData.questId : '';
  const done = questData ? questData.done : false;
  const userId = useSelector(state => authSelectors.getUserId(state));
  const { isQuest } = questData;
  // const isQuest = false;

  //----------common handlers ------------
  const dispatch = useDispatch();
  const handleDifficulty = ({ target }) => setDifficulty(target.value);

  const handleChangeText = ({ target }) => setText(target.value);

  const handleDateChange = date => setSelectedDate(date);

  const handleDestination = ({ target }) => setGroup(target.value);

  const handleEditing = () =>
    isEditing ? setEditing(false) : setEditing(true);

  const handleOpenCloseModalComplete = () =>
    modalComplete ? setOpenModalComplete(false) : setOpenModalComplete(true);

  const handleDoneWithModal = () => {
    handleDone();
    handleOpenCloseModalComplete();
  };
  //----------quests handlers ------------
  const handleDone = () =>
    dispatch(tasksOperations.updateQuest(questId, { done: true }));

  const handleDelete = () => dispatch(tasksOperations.deleteQuest(questId));

  // -------Challenges handlesr-------
  const handleAccept = () => {
    setAccept(true);
    dispatch(
      tasksOperations.acceptChallenge(questId, {
        updateFields: { challengeSendToUser: true },
      }),
    );
  };
  const handleDoneChallange = () =>
    dispatch(
      tasksOperations.updateChallenge(questId, {
        updateFields: { done: true },
      }),
    );

  const handleDeleteChallange = () =>
    dispatch(
      tasksOperations.deleteChallenge(questId, {
        userId: userId,
        updateFields: { challengeSendToUser: false },
      }),
    );

  const generalStyles = general();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Card className={generalStyles.root}>
          {!isEditing && isQuest && (
            <Content
              questData={{
                difficulty,
                name,
                dueDate,
                group,
                done,
                questId,
              }}
              onClickEditing={handleEditing}
              onClickDone={handleOpenCloseModalComplete}
              onClickDelete={handleDelete}
            />
          )}
          {!isEditing && !isQuest && (
            <Challenge
              questData={{
                difficulty,
                name,
                dueDate,
                group,
                done,
                challengeSendToUser,
                questId,
              }}
              onClickEditing={handleEditing}
              onClickDone={handleDoneChallange}
              onClickDelete={handleDeleteChallange}
              onAccept={handleAccept}
            />
          )}
          {isEditing && (
            <CardEditing
              questData={{ difficulty, name, dueDate, group, questId, isQuest }}
              cancelEditing={handleEditing}
              handleDifficulty={handleDifficulty}
              handleChangeText={handleChangeText}
              handleDateChange={handleDateChange}
              handleDestination={handleDestination}
            />
          )}
        </Card>
      </ThemeProvider>
      {modalComplete && (
        <CompletedModal
          taskName={name}
          onCloseModal={handleOpenCloseModalComplete}
          onCloseQuest={handleDoneWithModal}
        />
      )}
    </>
  );
};

export default CardContainer;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import T from 'prop-types';
import { parseISO } from 'date-fns';
import { ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import theme from './CardEding/styles/muiTheme';
import { general } from './CardEding/styles/cardStyling';
import Content from './CardComponent/Card';
import CardEditing from './CardEding/CardEding';
import CompletedModal from '../CompletedModal/CompletedModal';
import CompletedChallengeModal from '../CompletedModal/CompletedChallengeModal';
import DeleteQuestModal from '../DeleteQuestModal/DeleteQuestModal';
import DeleteChallengeModal from '../DeleteQuestModal/DeleteChallengeModal';
import tasksOperations from '../../redux/tasks/tasksOperations';
import authSelectors from '../../redux/auth/authSelectors';
import Challenge from './Challenge';

const CardContainer = ({ questData, newCard, closeForm }) => {
  //-------- State -----------
  const [isEditing, setEditing] = useState(newCard || false);
  const [difficulty, setDifficulty] = React.useState(
    questData.difficulty ? questData.difficulty : 'Easy',
  );
  const [name, setText] = React.useState(questData.name ? questData.name : '');
  const [dueDate, setSelectedDate] = React.useState(
    questData.dueDate ? parseISO(questData.dueDate) : new Date(),
  );
  const [group, setGroup] = React.useState(
    questData.group ? questData.group : 'Stuff',
  );
  const [challengeSendToUser, setAccept] = React.useState(
    questData ? questData.challengeSendToUser : false,
  );
  const [modalComplete, setOpenModalComplete] = React.useState(false);
  const [modalDelete, setOpenModalDelete] = React.useState(false);

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

  const handleDestination = target => setGroup(target);

  const handleEditing = () =>
    isEditing ? setEditing(false) : setEditing(true);

  const handleOpenCloseModalComplete = () => {
    modalComplete ? setOpenModalComplete(false) : setOpenModalComplete(true);
    handleEditing();
  };

  const handleOpenCloseModalDelete = () =>
    modalDelete ? setOpenModalDelete(false) : setOpenModalDelete(true);

  const handleDoneWithModal = () => {
    handleDone();
    handleOpenCloseModalComplete();
  };

  const handleDoneChallengeWithModal = () => {
    handleDoneChallange();
    handleOpenCloseModalComplete();
  };

  const handleDeleteWithModal = () => {
    handleDelete();
    handleOpenCloseModalDelete();
  };

  const handleDeleteChallengeWithModal = () => {
    handleDeleteChallange();
    handleOpenCloseModalDelete();
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
        userId: userId,
        updateFields: { challengeSendToUser: true, done: true },
      }),
    );

  const handleDeleteChallange = () =>
    dispatch(
      tasksOperations.deleteChallenge(questId, {
        userId: userId,
        updateFields: { challengeSendToUser: false, done: false },
      }),
    );

  const generalStyles = general();

  return (
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
            onClickDelete={handleOpenCloseModalDelete}
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
            onClickDone={handleOpenCloseModalComplete}
            onClickDelete={handleOpenCloseModalDelete}
            onAccept={handleAccept}
          />
        )}
        {isEditing && (
          <CardEditing
            questData={{ difficulty, name, dueDate, group, questId, isQuest }}
            newCard={newCard}
            cancelEditing={handleEditing}
            handleDifficulty={handleDifficulty}
            handleChangeText={handleChangeText}
            handleDateChange={handleDateChange}
            handleDestination={handleDestination}
            handleCloseForm={closeForm}
          />
        )}
        {modalDelete && isQuest && (
          <DeleteQuestModal
            onCloseModal={handleOpenCloseModalDelete}
            cancelEditing={handleEditing}
            onDeleteQuest={handleDeleteWithModal}
          />
        )}
        {modalComplete && isQuest && (
          <CompletedModal
            taskName={name}
            onCloseModal={handleOpenCloseModalComplete}
            onCloseQuest={handleDoneWithModal}
          />
        )}
        {modalDelete && !isQuest && (
          <DeleteChallengeModal
            onCloseModal={handleOpenCloseModalDelete}
            cancelEditing={handleEditing}
            onDeleteChallenge={handleDeleteChallengeWithModal}
          />
        )}
        {modalComplete && !isQuest && (
          <CompletedChallengeModal
            taskName={name}
            onCloseModal={handleOpenCloseModalComplete}
            onCloseChallenge={handleDoneChallengeWithModal}
          />
        )}
      </Card>
    </ThemeProvider>
  );
};

CardContainer.propTypes = {
  questData: T.shape({
    questId: T.string,
    difficulty: T.string,
    name: T.string,
    dueDate: T.string,
    group: T.string,
    done: T.bool,
    isQuest: T.bool,
    challengeSendToUser: T.bool,
  }),
  newCard: T.bool,
  closeForm: T.func,
};

export default CardContainer;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import T from 'prop-types';
import Card from '@material-ui/core/Card';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/muiTheme';
import { general } from './styles/cardStyling';
import CardHeaderSection from './Header';
import ContentSection from './Content/CardContent';
import Footer from './Actions/Footer';
import authSelectors from '../../../redux/auth/authSelectors';
import tasksOperations from '../../../redux/tasks/tasksOperations';
import formatDate from '../helpers/dateHelper';

const CardEditing = ({
  cancelEditing,
  questData,
  newCard,
  handleDifficulty,
  handleChangeText,
  handleDateChange,
  handleDestination,
  handleCloseForm,
}) => {
  const { difficulty, dueDate, group, name, questId, isQuest } = questData;
  const userId = useSelector(state => authSelectors.getUserId(state));

  //------- styles -----------------
  const generalStyles = general();

  //----------- Submit form ----------------
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    //if editing
    if (questId && isQuest) {
      cancelEditing();
      return dispatch(
        tasksOperations.updateQuest(questId, {
          difficulty,
          dueDate,
          group,
          name,
        }),
      );
    }
    if (questId && !isQuest) {
      cancelEditing();
      return dispatch(
        tasksOperations.updateChallenge(questId, {
          updateFields: {
            difficulty,
            dueDate,
            group,
            name,
          },
        }),
      );
    }
    //if creating brand new quest
    if (!questId) {
      cancelEditing();
      handleCloseForm();
      return dispatch(
        tasksOperations.addQuest({ difficulty, dueDate, group, name, userId }),
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Card className={generalStyles.root}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <CardHeaderSection value={difficulty} onChange={handleDifficulty} />
          <ContentSection
            textValue={name}
            onChangeText={handleChangeText}
            dateValue={dueDate}
            formatDate={formatDate}
            onChangeDate={handleDateChange}
            questId={questId}
          />
          <Footer
            value={group}
            onChange={handleDestination}
            cancelEditing={cancelEditing}
            newCard={newCard}
            handleCloseForm={handleCloseForm}
          />
        </form>
      </Card>
    </ThemeProvider>
  );
};

CardEditing.propTypes = {
  questData: T.shape({
    questId: T.string,
    difficulty: T.string.isRequired,
    name: T.string,
    dueDate: T.instanceOf(Date).isRequired,
    group: T.string.isRequired,
  }),
};

export default CardEditing;

import React, { useCallback } from 'react';
import { compose } from 'redux';
import { connect, useDispatch, useSelector } from 'react-redux';
import T from 'prop-types';
import { isToday, isTomorrow, format, isValid, parseISO } from 'date-fns';
import Card from '@material-ui/core/Card';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/muiTheme';
import { general } from './styles/cardStyling';
import CardHeaderSection from './Header';
import ContentSection from './Content/CardContent';
import Footer from './Actions/Footer';
import authSelectors from '../../redux/auth/authSelectors';
import tasksOperations from '../../redux/tasks/tasksOperations';

const CardEditing = ({ cancelEditing, questData }) => {
  //--------state-------
  const [difficulty, setDifficulty] = React.useState(
    questData.difficulty || '',
  );
  const [name, setText] = React.useState(questData.name || '');
  const [dueDate, setSelectedDate] = React.useState(
    parseISO(questData.dueDate) || new Date(),
  );
  const [group, setGroup] = React.useState(questData.group || '');

  //------- styles -----------------
  const generalStyles = general();

  //--------- handlers -------------
  const handleDifficulty = ({ target }) => setDifficulty(target.value);
  const handleChangeText = ({ target }) => setText(target.value);
  const handleDateChange = date => setSelectedDate(date);

  const handleDestination = ({ target }) => setGroup(target.value);
  // const userId = useSelector(store => authSelectors.getUserId(store));
  const userId = '5e68c62a4a36bf664bacf714';
  // console.log(userId2)
  // console.log(questData.questId)
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    //if editing
    if (questData.questId)
      return dispatch(
        tasksOperations.updateQuest(questData.questId, {
          difficulty,
          dueDate,
          group,
          name,
        }),
      );
    //if creating brand new quest
    dispatch(
      tasksOperations.addQuest({ difficulty, dueDate, group, name, userId }),
    );
  };

  // e => {
  //   e.preventDefault();
  //   this.props.createUpdateCard(difficulty, text, selectedDate, chip);
  // }

  //------- Date helper ----------
  const formatDate = pickedDate => {
    if (isToday(pickedDate)) return 'Today';
    if (isTomorrow(pickedDate)) return 'Tomorrow';
    return isValid(pickedDate)
      ? format(pickedDate, 'dd MMMM yyyy')
      : 'Invalid date';
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
          />
          <Footer
            value={group}
            onChange={handleDestination}
            cancelEditing={cancelEditing}
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
    name: T.string.isRequired,
    dueDate: T.string.isRequired,
    group: T.string.isRequired,
  }),
};

// const mapStateToProps = store => ({
//   userId: authSelectors.getUserId(store)
// });

// export default connect(mapStateToProps)(CardEditing);

export default CardEditing;

//Create new quest----------
// Request payload
// dueDate: "2020-03-26T11:08:00.000+02:00"
// name: "Test"
// group: "Social"
// difficulty: "Normal"
// userId: "5e68c62a4a36bf664bacf714"

//Update quest---------------
//Request URL: https://questify.goit.co.ua/api/quests/5e68c62a4a36bf664bacf719
// name: "Test2"
// group: "Health"
// difficulty: "Hard"

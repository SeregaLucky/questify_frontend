import React, { useCallback } from 'react';
// import { compose } from 'redux';
// import { connect, useDispatch } from 'react-redux';
// import T from 'prop-types';
import { isToday, isTomorrow, format, isValid } from 'date-fns';
import Card from '@material-ui/core/Card';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/muiTheme';
import { general } from './styles/cardStyling';
import CardHeaderSection from './Header';
import ContentSection from './Content/CardContent';
import Footer from './Actions/Footer';

const CardEditing = () => {
  //--------state-------
  const [difficulty, setDifficulty] = React.useState('');
  const [text, setText] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [chip, setChip] = React.useState('');

  //------- styles -----------------
  const generalStyles = general();

  //--------- handlers -------------
  const handleDifficulty = ({ target }) => setDifficulty(target.value);
  const handleChangeText = ({ target }) => setText(target.value);
  const handleDateChange = date => setSelectedDate(date);
  const handleDestination = ({ target }) => setChip(target.value);
  // const dispatch = useDispatch();
  // const handleSubmit = useCallback(() => dispatch(cardOperations.addCard({ difficulty, text, selectedDate, chip })))

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

  //DO NOT DELETE this comment
  // console.log('state', chip,
  //   selectedDate,
  //   difficulty,
  //   text);
  return (
    <ThemeProvider theme={theme}>
      <Card className={generalStyles.root}>
        {/* onSubmit={handleSubmit} */}
        <form noValidate autoComplete="off">
          <CardHeaderSection value={difficulty} onChange={handleDifficulty} />
          <ContentSection
            textValue={text}
            onChangeText={handleChangeText}
            dateValue={selectedDate}
            formatDate={formatDate}
            onChangeDate={handleDateChange}
          />
          <Footer value={chip} onChange={handleDestination} />
        </form>
      </Card>
    </ThemeProvider>
  );
};

export default CardEditing;

import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { CardHeader } from '@material-ui/core';
import { isToday, isTomorrow, format, isValid } from 'date-fns';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarIcon from './starIcon';
import { content } from '../CardEding/styles/cardStyling';
import styles from './card.module.css';
import Difficulty from './Difficulty';
import CompletedModal from '../../CompletedModal/CompletedModal';
import tasksOperations from '../../../redux/tasks/tasksOperations';

const Card = ({ questData, onClick }) => {
  //-----completedModal-------//
  const [openCompletedModal, setIsCompletedModalOpen] = React.useState(false);
  const { questId, done } = questData;
  const dispatch = useDispatch();
  const handleOpenCompletedModal = () => setIsCompletedModalOpen(true);
  const handleCloseCompletedModal = () => setIsCompletedModalOpen(false);
  const handleCloseQuest = () => {
    if (questId && !done)
      return dispatch(tasksOperations.updateQuest(questId, { done: true }));
    setIsCompletedModalOpen(false);
  };

  const cardContentStyles = content();

  const formatDate = pickedDate => {
    if (isToday(pickedDate)) return 'Today';
    if (isTomorrow(pickedDate)) return 'Tomorrow';
    return isValid(pickedDate)
      ? format(pickedDate, 'dd MMMM yyyy')
      : 'Invalid date';
  };

  return (
    <div onClick={onClick} role="presentation">
      <CardHeader
        title={<Difficulty difficulty={questData.difficulty} />}
        action={<StarIcon />}
      />
      <CardContent className={cardContentStyles.cardContent}>
        <Typography variant="h6" gutterBottom>
          {questData.name}
        </Typography>
        <Typography variant="subtitle2" gutterBottom color="secondary">
          {formatDate(questData.dueDate)}
        </Typography>
      </CardContent>
      <div
        className={clsx(
          styles.chip,
          questData.group === 'Health' && styles['chipBg-health'],
        )}
      >
        <Typography variant="body2">{questData.group}</Typography>
      </div>
      {/* ---Button for opening modal-----*/}
      {!done && (
        <button type="button" onClick={handleOpenCompletedModal}>
          done
        </button>
      )}
      {openCompletedModal && (
        <CompletedModal
          onCloseModal={handleCloseCompletedModal}
          onCloseQuest={handleCloseQuest}
          taskName={questData.name}
        />
      )}
    </div>
  );
};

export default Card;

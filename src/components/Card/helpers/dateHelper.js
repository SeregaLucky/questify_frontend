import { isToday, isTomorrow, format, isValid } from 'date-fns';
const formatDate = pickedDate => {
  if (isToday(pickedDate)) return 'Today';
  if (isTomorrow(pickedDate)) return 'Tomorrow';
  return isValid(pickedDate)
    ? format(pickedDate, 'dd MMMM yyyy')
    : 'Invalid date';
};

export default formatDate;

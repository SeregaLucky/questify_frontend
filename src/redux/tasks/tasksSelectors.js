import { createSelector } from 'reselect';

const getAllQuests = store => {
  return store.tasks.tasks;
};

// const getTodayQuests = store => {
//   const today = String(new Date().toJSON().substr(0, 10));
//   const allQuests = getAllQuests(store);
//   return allQuests.filter(
//     quest => (quest.done === false) & (quest.dueDate.substr(0, 10) === today),
//   );
// };

const today = String(new Date().toJSON().substr(0, 10));
const ttoday = new Date();
const day = Number(today.substr(8, 2));
const month = ttoday.getMonth() + 1;
const year = ttoday.getFullYear();

const getTodayQuests = createSelector(getAllQuests, tasks =>
  tasks.filter(
    quest => (quest.done === false) & (quest.dueDate.substr(0, 10) === today),
  ),
);

// const getTomorowQuests = store => {
//   const today = String(new Date().toJSON().substr(0, 10));
//   const ttoday = new Date();
//   const day = Number(today.substr(8, 2));
//   const month = ttoday.getMonth() + 1;
//   const year = ttoday.getFullYear();
//   const allQuests = getAllQuests(store);
//   console.log(allQuests);
//   return allQuests.filter(
//     // quest => (quest.done === false) & (quest.dueDate.substr(0, 10) !== today),
//     quest =>
//       (quest.done === false) &
//       ((Number(quest.dueDate.substr(0, 4)) === year &&
//         Number(quest.dueDate.substr(5, 2)) === month &&
//         Number(quest.dueDate.substr(8, 2)) - day === 1) ||
//         (Number(quest.dueDate.substr(0, 4)) === year &&
//           Number(quest.dueDate.substr(5, 2)) - month === 1 &&
//           Number(quest.dueDate.substr(8, 2)) === 1) ||
//         (Number(quest.dueDate.substr(0, 4)) - year === 1 &&
//           Number(quest.dueDate.substr(5, 2)) === 1 &&
//           Number(quest.dueDate.substr(8, 2)) === 1)),
//   );
// };

const getTomorowQuests = createSelector(getAllQuests, tasks =>
  tasks.filter(
    quest =>
      (quest.done === false) &
      ((Number(quest.dueDate.substr(0, 4)) === year &&
        Number(quest.dueDate.substr(5, 2)) === month &&
        Number(quest.dueDate.substr(8, 2)) - day === 1) ||
        (Number(quest.dueDate.substr(0, 4)) === year &&
          Number(quest.dueDate.substr(5, 2)) - month === 1 &&
          Number(quest.dueDate.substr(8, 2)) === 1) ||
        (Number(quest.dueDate.substr(0, 4)) - year === 1 &&
          Number(quest.dueDate.substr(5, 2)) === 1 &&
          Number(quest.dueDate.substr(8, 2)) === 1)),
  ),
);

// const getOtherQuests = store => {
//   const today = String(new Date().toJSON().substr(0, 10));
//   const ttoday = new Date();
//   const day = Number(today.substr(8, 2));
//   const month = ttoday.getMonth() + 1;
//   const year = ttoday.getFullYear();
//   const allQuests = getAllQuests(store);
//   return allQuests
//     .filter(noDoneQuest => noDoneQuest.done === false)
//     .filter(noTodayQuest => noTodayQuest.dueDate.substr(0, 10) !== today)
//     .filter(
//       otherQuest =>
//         (Number(otherQuest.dueDate.substr(0, 4)) === year &&
//           Number(otherQuest.dueDate.substr(5, 2)) === month &&
//           Number(otherQuest.dueDate.substr(8, 2)) - day > 1) ||
//         (Number(otherQuest.dueDate.substr(0, 4)) === year &&
//           Number(otherQuest.dueDate.substr(5, 2)) !== month) ||
//         // &&
//         // Number(otherQuest.dueDate.substr(8, 2)) < day)
//         (Number(otherQuest.dueDate.substr(0, 4)) !== year &&
//           Number(otherQuest.dueDate.substr(5, 2)) !== 1 &&
//           Number(otherQuest.dueDate.substr(8, 2)) !== 1),
//     );
// };

const getOtherQuests = createSelector(getAllQuests, tasks =>
  tasks
    .filter(noDoneQuest => noDoneQuest.done === false)
    .filter(noTodayQuest => noTodayQuest.dueDate.substr(0, 10) !== today)
    .filter(
      otherQuest =>
        (Number(otherQuest.dueDate.substr(0, 4)) === year &&
          Number(otherQuest.dueDate.substr(5, 2)) === month &&
          Number(otherQuest.dueDate.substr(8, 2)) - day > 1) ||
        (Number(otherQuest.dueDate.substr(0, 4)) === year &&
          Number(otherQuest.dueDate.substr(5, 2)) !== month) ||
        (Number(otherQuest.dueDate.substr(0, 4)) !== year &&
          Number(otherQuest.dueDate.substr(5, 2)) !== 1 &&
          Number(otherQuest.dueDate.substr(8, 2)) !== 1),
    ),
);

// const getDoneQuests = store => {
//   const doneQuests = getAllQuests(store);
//   return doneQuests.filter(quest => quest.done === true);
// };

const getDoneQuests = createSelector(getAllQuests, tasks =>
  tasks.filter(quest => quest.done === true),
);

//undone guests + qusts due date of which not today or tomorrow
const getTheRestQests = store => {};

const getQuestById = (store, id) => {
  const quests = getAllQuests(store);

  return quests.find(quest => quest.id === id);
};

export default {
  getAllQuests,
  getTodayQuests,
  getTomorowQuests,
  getOtherQuests,
  getDoneQuests,
  getQuestById,
};

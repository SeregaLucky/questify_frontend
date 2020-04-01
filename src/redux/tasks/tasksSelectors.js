import { createSelector } from 'reselect';

const getAllQuests = store => {
  return store.tasks.tasks;
};

const today = String(new Date().toJSON().substr(0, 10));
const ttoday = new Date();
const day = Number(today.substr(8, 2));
console.log(`day: ${day}`);
const month = ttoday.getMonth() + 1;
console.log(`month: ${month}`);
const year = ttoday.getFullYear();
console.log(`year: ${year}`);

const getTodayQuests = createSelector(getAllQuests, tasks =>
  tasks.filter(
    quest => (quest.done === false) & (quest.dueDate.substr(0, 10) === today),
  ),
);

const getTomorowQuests = createSelector(getAllQuests, tasks =>
  tasks.filter(
    quest => console.log(Number(quest.dueDate.substr(0, 4))),
    // (quest.done === false) &
    // ((Number(quest.dueDate.substr(0, 4)) === year &&
    //   Number(quest.dueDate.substr(5, 2)) === month &&
    //   Number(quest.dueDate.substr(8, 2)) - day === 1) ||
    //   (Number(quest.dueDate.substr(0, 4)) === year &&
    //     Number(quest.dueDate.substr(5, 2)) - month === 1 &&
    //     Number(quest.dueDate.substr(8, 2)) === 1) ||
    //   (Number(quest.dueDate.substr(0, 4)) - year === 1 &&
    //     Number(quest.dueDate.substr(5, 2)) === 1 &&
    //     Number(quest.dueDate.substr(8, 2)) === 1)),
  ),
);

const getOtherQuests = createSelector(
  getAllQuests,
  tasks => console.log('hi'),
  // tasks
  //   .filter(noDoneQuest => noDoneQuest.done === false)
  //   .filter(noTodayQuest => noTodayQuest.dueDate.substr(0, 10) !== today)
  //   .filter(
  //     otherQuest =>
  //       (Number(otherQuest.dueDate.substr(0, 4)) === year &&
  //         Number(otherQuest.dueDate.substr(5, 2)) === month &&
  //         Number(otherQuest.dueDate.substr(8, 2)) - day > 1) ||
  //       (Number(otherQuest.dueDate.substr(0, 4)) === year &&
  //         Number(otherQuest.dueDate.substr(5, 2)) !== month) ||
  //       (Number(otherQuest.dueDate.substr(0, 4)) !== year &&
  //         Number(otherQuest.dueDate.substr(5, 2)) !== 1 &&
  //         Number(otherQuest.dueDate.substr(8, 2)) !== 1),
  //   ),
);

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

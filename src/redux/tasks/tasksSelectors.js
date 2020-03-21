const getAllQuests = store => {
  // console.log(store.tasks.tasks.tasks.quests);
  return store.tasks.tasks;
};

const getTodayQuests = store => {
  const today = String(new Date().toJSON().substr(0, 10));
  const allQuests = getAllQuests(store);
  return allQuests.filter(
    quest => (quest.done === false) & (quest.dueDate.substr(0, 10) === today),
  );
};

const getTomorowQuests = store => {
  const today = String(new Date().toJSON().substr(0, 10));
  const todayDay = new Date().getDate();
  const allQuests = getAllQuests(store);
  return allQuests.filter(
    quest => Number(quest.dueDate[8] + quest.dueDate[9]) > today,
  );
};

const getDoneQuests = store => {
  const doneQuests = getAllQuests(store);
  return doneQuests.filter(quest => quest.done === true);
};
//undone guests + qusts due date of which not today or tomorrow
const getTheRestQests = store => {};

export default {
  getAllQuests,
  getTodayQuests,
  getTomorowQuests,
  getDoneQuests,
};

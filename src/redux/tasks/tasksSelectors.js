const getAllQuests = store => {
  console.log(store.tasks.tasks);
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
  const allQuests = getAllQuests(store);
  return allQuests.filter(
    quest => (quest.done === false) & (quest.dueDate.substr(0, 10) !== today),
  );
};

const getDoneQuests = store => {
  const doneQuests = getAllQuests(store);
  return doneQuests.filter(quest => quest.done === true);
};
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
  getDoneQuests,
  getQuestById,
};

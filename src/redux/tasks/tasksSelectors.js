const getAllQuests = store => store.tasks.tasks;
const getTodayQuests = store => {};
const getTomorowQuests = store => {};
const getDoneQuests = store => {};
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

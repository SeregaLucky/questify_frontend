//if nickname (if selfmade backend => token) in the store ---> the user is authenticated

const isAuth = store => store.auth.nickname;

const getUserId = store => store.auth.userId;

export default { isAuth, getUserId };

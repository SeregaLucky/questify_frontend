//if nickname (if selfmade backend => token) in the store ---> the user is authenticated
const isAuth = store => {};
const getUserId = store => store.auth.userId;
export default { isAuth, getUserId };

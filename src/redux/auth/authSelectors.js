//if nickname (if selfmade backend => token) in the store ---> the user is authenticated

const isAuth = store => {
  return store.auth.nickname;
};

export default isAuth;

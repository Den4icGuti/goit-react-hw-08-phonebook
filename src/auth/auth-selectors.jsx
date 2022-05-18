const getUserName = state => state.auth.user.name;
const getIsLoggedIn = state => state.auth.isLoggedIn;

export const authSelectors = {
  getUserName,
  getIsLoggedIn,
};

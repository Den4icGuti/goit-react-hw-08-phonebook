import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/auth-selectors';

const RequareAuth = ({ children, redirect }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to={redirect} />;
};

export default RequareAuth;

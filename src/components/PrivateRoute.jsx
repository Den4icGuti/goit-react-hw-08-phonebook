import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'auth/auth-selectors';

export default function RequareAuth({ redirectTo, children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to={redirectTo} />;
}

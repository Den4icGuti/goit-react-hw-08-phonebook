import Container from './Container';
import RequareAuth from './PrivateRoute';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import UserMenu from './UserMenu';
import Registration from './Pages/Registration';
import Autorization from './Pages/Autorization';
import { authSelectors } from 'auth/auth-selectors';
import ContactsViews from './Pages/ContatsViews/ContactsViews';
import AppBar from './AppBar/AppBar';

export const App = () => {
  const loggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Autorization />} />
        <Route
          path="contacts"
          element={
            <RequareAuth redirect="contacts">
              <ContactsViews />
            </RequareAuth>
          }
        ></Route>

        <Route path="*" element={loggedIn ? <UserMenu /> : <Home />}></Route>
      </Routes>
    </Container>
  );
};

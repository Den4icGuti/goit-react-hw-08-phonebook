import Container from './Container';
import RequareAuth from './PrivateRoute';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import UserMenu from './UserMenu';
import Registration from './Pages/Registration';
import Autorization from './Pages/Autorization';
import AppBar from './AppBar/AppBar';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<Autorization />} />
        <Route
          path="contacts"
          element={
            <RequareAuth redirect="contacts">
              <UserMenu />
            </RequareAuth>
          }
        ></Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};

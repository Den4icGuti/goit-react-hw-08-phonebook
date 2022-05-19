import Container from './Container';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Registration from './Pages/Registration';
import Autorization from './Pages/Autorization';
import PrivateRoute from './PrivateRoute';
import UserMenu from './UserMenu';
import AppBar from './AppBar/AppBar';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="login" element={<Autorization />} />
        <Route path="register" element={<Registration />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/contacts">
              <UserMenu />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};

import Container from './Container';
import AppBar from './Navigation/AppBar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Registration from './Pages/Registration';
import Autorization from './Pages/Autorization';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/login" element={<Autorization />} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};

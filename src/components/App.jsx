import Container from './Container';
import Navigation from './Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Registration from './Pages/Registration';
import Autorization from './Pages/Autorization';

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<Autorization />} />
      </Routes>
    </Container>
  );
};

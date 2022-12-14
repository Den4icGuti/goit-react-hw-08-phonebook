import Container from './Container';
import { lazy, Suspense } from 'react';
import RequareAuth from './PrivateRoute';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';

const Registration = lazy(() => import('./Pages/Registration'));
const Authorization = lazy(() => import('./Pages/Authorization'));
const ContactsViews = lazy(() => import('./Pages/ContatsViews/ContactsViews'));
const Home = lazy(() => import('./Pages/Home'));

export const App = () => {
  return (
    <Container>
      <Suspense fallback={<>Loading....</>}>
        <AppBar />
        <Routes>
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<Authorization />} />
          <Route
            path="contacts"
            element={
              <RequareAuth redirect="contacts">
                <ContactsViews />
              </RequareAuth>
            }
          ></Route>

          <Route path="*" element={<Home />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
};

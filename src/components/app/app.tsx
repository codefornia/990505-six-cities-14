import {Main, Favorites, Login, Offer, NotFoundPage} from '../../pages';
import {JSX} from 'react';
import {AppRouter} from '../../const';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import PrivateRoute from './private-route';

type AppProps = {
  offerCount: number;
}

function App({offerCount}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRouter.Main}
            element={<Main offerCount={offerCount} />}
          />
          <Route
            path={AppRouter.Offer}
            element={<Offer />}
          />
          <Route
            path={AppRouter.Favorites}
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRouter.Login}
            element={<Login />}
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

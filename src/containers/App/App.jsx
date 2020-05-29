import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Topbar from '../../components/Topbar';

import Routes from '../../routes';

import '../../global.scss';

const App = () => (
  <BrowserRouter>
    <Topbar />

    <Routes />
  </BrowserRouter>
)

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Topbar from '../../components/Topbar';

import Routes from '../../routes';

import '../../global.scss';

const App = () => (
  <BrowserRouter id="app">
    <Topbar />

    <Routes id="page-wrap"/>
  </BrowserRouter>
)

export default App;

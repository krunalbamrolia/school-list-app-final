import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./responsive.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './ReduxToolkit/Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { BrowserRouter } from 'react-router-dom';

// const theme = createTheme();

// ReactDOM.render(
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </ThemeProvider>,
//   document.getElementById('root')
// );

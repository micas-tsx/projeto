import { ToastContainer } from 'react-toastify'
import { Router } from "react-router-dom/cjs/react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'


import Header from "./components/Header"
import store, { persistor } from "./store";
import history from "./services/history";
import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header"
import { Provider } from "react-redux";
import store from "./store";

import { Router } from "react-router-dom/cjs/react-router-dom";
import Routes from "./routes";
import history from "./services/history";
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toast-container" />
      </Router>
    </Provider>
  );
}

export default App;
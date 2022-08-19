import "./App.css";
import GlobalStyle from "./styles/global";
import Routes from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from './components/contexts/AuthContext'
import TechProvider from "./components/contexts/TechsContext";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <TechProvider>
        <GlobalStyle />
        <Routes />
        <ToastContainer
          position="top-right"
          autoClose={1200}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          toastStyle={{ backgroundColor: "black", color: "white" }}
        />
        </TechProvider>

      </AuthProvider>
    </div>
  );
}

export default App;

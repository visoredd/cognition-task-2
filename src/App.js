import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthWrapper } from "./auth/AuthWrapper";
import ErrorBoundary from "./components/pages/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter>
          <AuthWrapper />
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;

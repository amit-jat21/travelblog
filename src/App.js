import "@fortawesome/fontawesome-free/css/all.min.css";

import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/Signup";
import Main from "./Components/Main";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<LoginPage />}/>
        <Route path="signUp" element={<SignupPage />}/>
      </Routes>
    </>
  );
}

export default App;

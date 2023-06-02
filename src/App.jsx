import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import DateCalendarServerRequest from "./pages/CheckerPage";
import CalculatorPage from "./pages/CalculatorPage";
import LessonPage from "./pages/LessonPage";
import SignIn from "./pages/LoginPage";
import SignUp from "./pages/RegisterPage";
import Error from "./pages/Error";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/news" element={<NewsPage />} />
        <Route path="/checker" element={<DateCalendarServerRequest />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/lessons" element={<LessonPage />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import AddExpense from './pages/addExpense/AddExpense.jsx';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add" element = {<AddExpense />}/>
        </Routes>
        <div>Footer</div>
    </Router>
  );
}

export default App;

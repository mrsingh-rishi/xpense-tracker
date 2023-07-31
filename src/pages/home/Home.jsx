import React from "react";
import './home.css';
import Topfold from "../../components/topfold/Topfold";
import ExpenseList from "../../components/expenseList/ExpenseList";

const Home = () => {
  return (
    <div className="home">
      <Topfold />
      <ExpenseList />
    </div>
  );
};

export default Home;

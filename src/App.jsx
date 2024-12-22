import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [currentPage] = useState('All Workers')
  return (
    <>
      <Header />
      <Outlet currentPage={currentPage}/>
    </>
  );
}

export default App;

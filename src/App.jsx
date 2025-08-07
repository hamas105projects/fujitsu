import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import PublicData from "./components/PublicData";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch({ type: "FETCH_TASKS" }); // memicu saga saat aplikasi pertama dibuka
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>Aplikasi Daftar Tugas Fujitsu</h1>

      {loading && <p>Memuat...</p>}

      <TaskForm />
      <TaskList />
      <PublicData />
    </div>
  );
}

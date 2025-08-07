import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../redux/tasksSlice";

export default function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const hapusTugas = (id) => {
    dispatch(deleteTask(id));
  };

  const ubahStatus = (id) => {
    dispatch(toggleTask(id));
  };

  if (tasks.length === 0) {
    return <p>Tidak ada tugas saat ini.</p>;
  }

  return (
    <div>
      <h2>Daftar Tugas</h2>
      {tasks.map((task) => (
        <div key={task.id} style={{ marginBottom: "8px" }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => ubahStatus(task.id)}
          />
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              marginLeft: "8px",
            }}
          >
            {task.title} ({task.category})
          </span>
          <button
            onClick={() => hapusTugas(task.id)}
            style={{ marginLeft: "10px", color: "red" }}
          >
            Hapus
          </button>
        </div>
      ))}
    </div>
  );
}

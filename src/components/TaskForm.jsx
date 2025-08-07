import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function TaskForm() {
  const dispatch = useDispatch();
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");

  const tambahTugas = () => {
    if (!judul.trim()) return;

    dispatch({
      type: "ADD_TASK",
      payload: {
        title: judul,
        category: kategori || "default",
      },
    });

    setJudul("");
    setKategori("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Judul tugas"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kategori"
        value={kategori}
        onChange={(e) => setKategori(e.target.value)}
      />
      <button onClick={tambahTugas}>Tambah Tugas</button>
    </div>
  );
}

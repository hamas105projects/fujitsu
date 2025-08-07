import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPublicData } from "../redux/publicDataSlice";

export default function PublicData() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.publicData.value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
        dispatch(setPublicData(res.data));
      } catch (err) {
        console.error("Gagal mengambil data publik:", err);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h2>Data Publik dari API</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title} {item.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

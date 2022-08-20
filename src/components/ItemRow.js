import React from "react";
import { useNavigate } from "react-router-dom";

export default function ItemRow({ item }) {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{item.name}</td>
      <td>
        <button onClick={() => navigate(`${item.id}`)}>Show Details</button>
      </td>
    </tr>
  );
}

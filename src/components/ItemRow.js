import React from "react";
import { useNavigate } from "react-router-dom";

export default function ItemRow({ item }) {
  const navigate = useNavigate();
  return (
    <tr>
      <td className="navbar-item" >{item.name}</td>
      <td>
        <button className="navbar-itemBtn" onClick={() => navigate(`${item.id}`)}>Show Details</button>
      </td>
    </tr>
  );
}

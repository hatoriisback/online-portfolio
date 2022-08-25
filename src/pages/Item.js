// import ReactDOM from "react-dom/client";
import { useParams } from "react-router-dom";
import { getItems } from "../items";

export default function Item() {
  let params = useParams();
  let items = getItems();
  let itemId = params.itemId;
  let item = items.find((item) => item.id === itemId);
  console.log(item);
  if (!item) {
    return null;
  }
  return (
    <div>
      <h1 className="navbar-title">Details Items</h1>
      <h2 className="navbar-item">ID USER: {item.id}</h2>
      <p  className="navbar-item">Nama: {item.name}</p>
      <p  className="navbar-item">Profesi: {item.jobdesk}</p>
    </div>
  );
}

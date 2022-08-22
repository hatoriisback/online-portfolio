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
      <h1>Details Hero</h1>
      <h2>ID USER: {item.id}</h2>
      <p>Nama: {item.name}</p>
      <p>Profesi: {item.jobdesk}</p>
    </div>
  );
}

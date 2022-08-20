import { useParams } from "react-router-dom";
import { getItems } from "../items";

export default function Item() {
  let params = useParams();
  let items = getItems();
  let item = items.find((item) => item.id === Number(params.itemId));
  return (
    <div>
      <h1>ID USER: {item.id}</h1>
      <p>Nama: {item.name}</p>
      <p>Profesi: {item.profesi}</p>
    </div>
  );
}

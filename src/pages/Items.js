import { Outlet } from "react-router-dom";
import { getItems } from "../items";
import ItemRow from "../components/ItemRow";

export default function Items() {
  let items = getItems();

  return (
    <div>
      <h1 className="navbar-title">Items Page Details</h1>
      <p>Select an item to be shown</p>
      <table>
        <tbody>
          <tr>
            <td>Item</td>
            <td>Action</td>
          </tr>
          {items.map((item) => {
            return <ItemRow key={item.id} item={item} />;
          })}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
}

import { Outlet } from "react-router-dom";
import { getItems } from "../items";
import ItemRow from "../components/ItemRow";
import { Link } from "react-router-dom";

export default function Items() {
  let items = getItems();

  return (
    <div>
      <Link className="navbar-title" to="">
        <h1>ITEMS</h1>
      </Link>
      <h3 className="navbar-h3">Items Page Details</h3>
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

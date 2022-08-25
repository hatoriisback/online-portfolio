import { useParams } from "react-router-dom";
import { getItems } from "../items";

// // Implementasi URL Paramater ( Cara 2 )
export default function Member() {
  let params = useParams();
  let members = getItems();
  let memberId = params.memberId;
  let member = members.find((member) => member.id === memberId);
  if (!member) {
    return (
        <></>
    );
  }
  return (
    <div>
      <h1 className="navbar-title">Detail ID : {member.id}</h1>
      <h1 className="navbar-title">Detail NAME : {member.name}</h1>
      <h1 className="navbar-title">Detail CLASS : {member.jobdesk}</h1>
      {/* <p>Here is the detail page of {memberName}</p> */}
    </div>
  );
}

// // Cara 1
// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'

// // Cara 2
// import { useParams } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import { getItems } from "../items";

// // Intro + Implementasi ( Cara 1 )
// export default function Members() {
//   return (
//     <div>
//         <h1>Ini Member Page</h1>
//         <p>Pilih Member untuk ditampilkan:</p>
//         <Link to="Bruno Mars">Bruno Mars</Link>
//         <Link to="Bruno Pluto">Bruno Pluto</Link>
//         <Link to="Bruno Matahari">Bruno Matahari</Link>
//         <Outlet />
//     </div>
//   )
// }

// // Implementasi URL Paramater ( Cara 2 )
export default function Members() {
  let navigate = useNavigate();
  let members = getItems();
  //   let memberName = params.memberName;
  return (
    <div>
      <h1 className="navbar-title">Details of Character</h1>
      {/* <p>Here is the detail page of {memberName}</p> */}
      <ul>
        {members.map((member, i) => {
          return (
            <li key={i} onClick={() => navigate(member.id)}>
              {member.name}
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}

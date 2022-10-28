import React from "react";

const Table = ({ addUser }) => {
  // console.log(addUser, "table alanı");

  return (
    <table className="table">
      <thead>
        <tr className="head-tr">
          <th style={{maxWidth:"15%"}} className="th">Img</th>
          <th className="th">Firstname</th>
          <th className="th">Email</th>
          <th className="th">Phone</th>
          <th className="th">Age</th>
        </tr>
      </thead>
      <tbody>
        {addUser?.map((user) => 
          <tr className="body-tr">
            <td ><img style={{width:"40px", height:"40px", margin:"auto 0", marginTop:"5px"}} src={user.picture?.large} />  </td>
            <td>{user.name.first}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.dob.age}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;

// const handlerUserList = () => {
//     const sentence = data.some((item) => item.email === user.email);
//     {
//       !sentence &&
//         setData([{
//             firstName: user.name.first,
//             lastName: user.name.last,
//             email: user.email,
//             phone: user.phone,
//             age: user.dob.age,
//             id: user.login.uuid,},
//           ...data,
//         ]);
//     }
//   };

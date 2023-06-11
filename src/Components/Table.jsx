import React from 'react';

const Table = ({user}) => {
  return (
    <div>
        <table border={1} width="100%" style={{textAlign:"center"}}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
                {
                  user.map((item,i) => {
                  return (
                    <tr key={i}>
                      <td><img src={item.picture.medium} alt="Logo" width={100} height={100}/></td>
                      <td>{item.name.first}</td>
                      <td>{item.email}</td>
                      <td>{item.gender}</td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
  );
}

export default Table;

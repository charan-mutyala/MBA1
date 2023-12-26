import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewAdmins = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/admins/allAdmins')
      .then(response => {
        setAdmins(response.data);
      })
      .catch(error => {
        console.error('Error fetching admins:', error);
      });
  }, []);

  return (
    <div>
      <h2>Admins List</h2>
      <table className="table" style={{ width: '50%' }}>
        <thead>
          <tr>
            <th>Admin Username</th>
          </tr>
        </thead>
        <tbody>
          {admins.map(admin => (
            <tr key={admin.id}>
              <td>{admin.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAdmins;

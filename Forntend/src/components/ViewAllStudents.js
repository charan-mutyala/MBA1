import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewAllStudents = () => {
  const [students, setStudents] = useState([]);
  const [searchRegistrationNumber, setSearchRegistrationNumber] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8082/admins/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []);

  const filteredStudents = students.filter(student =>
    student.registrationNumber && student.registrationNumber.includes(searchRegistrationNumber)
  );

//   const handleUpdate = (studentId) => {
//     // Implement the logic for updating a student
//     console.log(`Update student with ID: ${studentId}`);
//   };

const handleDelete = (studentId) => {
    // Make an API call to delete the student
    axios.delete(`http://localhost:8082/admins/deleteStudent/${studentId}`)
      .then(response => {
        // Handle success, e.g., remove the student from the list
        setStudents(prevStudents =>
          prevStudents.filter(student => student.id !== studentId)
        );
      })
      .catch(error => {
        console.error('Error deleting student:', error);
        // Handle error, e.g., display an error message
      });
  };

  return (
    <div>
      <h2> Students List</h2><br/>

      <div className="mb-3">
        <input
          type="text"
          placeholder='Search Register No. here'
          style={{width:'520px',marginLeft:'50px',textDecorationColor:'GrayText'}}
          id="searchRegistrationNumber"
          className="form-control"
          value={searchRegistrationNumber}
          onChange={(e) => setSearchRegistrationNumber(e.target.value)}
        />
      </div>
      <br/>

      <table className="table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Registration Number</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.registrationNumber}</td>
              <td>{student.password}</td>
              <td>
                {/* <button onClick={() => handleUpdate(student.id)}>Update</button>     */}
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAllStudents;

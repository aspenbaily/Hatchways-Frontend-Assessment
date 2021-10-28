import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentList from "./StudentList";

function Students() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState(students);

  // fetch student data using axios

  useEffect(() => {
    axios("https://api.hatchways.io/assessment/students")
      .then((response) => {
        console.log(response.data.students);
        setStudents(response.data.students);
        setFilteredStudents(response.data.students);
      })
      .catch((error) => {
        console.log("Error retrieving data: " + error);
      });
  }, []);

  // Student search function

  const handleStudentSearch = (event) => {
    let value = event.target.value;
    let result = [];
    console.log(value);
    result = students.filter((data) => {
      return (
        data.firstName.toLowerCase().search(value) !== -1 ||
        data.lastName.toLowerCase().search(value) !== -1
      );
    });
    setFilteredStudents(result);
  };

  return (
    <div className='students'>
      <input
        className='text-input search'
        placeholder='Search by name'
        type='text'
        onChange={(e) => handleStudentSearch(e)}
      />

      <ul className='student-list'>
        {filteredStudents.map((value) => {
          return (
            <div>
              <StudentList value={value} />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Students;

import React, { useState } from "react";
import TagList from "./Tags";
function StudentList({ value }) {
  const [clicked, setClicked] = useState(false);

  // calculates average from grades array
  function mean(numbers) {
    var total = 0,
      i;
    for (i = 0; i < numbers.length; i += 1) {
      total += parseInt(numbers[i]);
    }
    return total / numbers.length;
  }
  return (
    <div className='student-list'>
      <li key={value.id} className='student-list__item'>
        <div className='static'>
          <section className='student-list__avatar'>
            <img
              className='student-list__avatar--image'
              src={value.pic}
              alt={value.firstName}
            />
          </section>
          <section className='student-list__data'>
            <h2 className='student-list__data--name'>
              {value.firstName} {value.lastName}
            </h2>
            <span className='toggle' onClick={(key) => setClicked(!clicked)}>
              {clicked ? "-" : "+"}
            </span>
            <div className='student-list__data--details'>
              <p>Company: {value.company}</p>
              <p>Email: {value.email}</p>
              <p>Skill: {value.skill}</p>
              <p>Grade: {mean(value.grades)}%</p>

              <div className='dynamic'>
                <TagList />
                {clicked && (
                  <ol className='student-list__grades'>
                    {value.grades.map((grade) => (
                      <li className='student-list__grades--active'>{grade}</li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </section>
        </div>
      </li>
    </div>
  );
}

export default StudentList;

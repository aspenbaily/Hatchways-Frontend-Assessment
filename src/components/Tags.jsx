import { React, useState } from "react";

function TagList() {
  const [tags, setTags] = useState([]);

  // Tags functionality
  const addTags = (e) => {
    if (e.key === "Enter") {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <div className='container'>
      <ul className='tags-list'>
        {tags.map((tag, index) => (
          <li className='tags-list__item' key={index}>
            {tag}
          </li>
        ))}
      </ul>
      <input
        className='tags-input text-input'
        onKeyUp={addTags}
        type='text'
        placeholder='Add tag'
      />
    </div>
  );
}

export default TagList;

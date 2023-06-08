import React, { useState } from "react";

// {items: [], heading: string}

interface Props{
    items: string[];
    heading: string;
    // (item: string)=> void
    onSelectItem: (item: string) => void
}

const ListGroup = ({items, heading, onSelectItem}:Props) => {
  
//   Hook
  const [selectedIndex, setSelecetedIndex] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item} 
            onClick={() => { setSelecetedIndex(index)
            onSelectItem(item)
            }} >
            {item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;

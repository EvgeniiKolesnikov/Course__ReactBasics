import { useEffect, useState } from "react";


export default function ItemsList({getItems}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('useEffect ItemsList');
    const newItems = getItems(42);
    setItems(newItems);
  }, [getItems]);

  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  )
}
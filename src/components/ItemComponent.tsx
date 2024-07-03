import React, { FormEvent, useReducer, useState } from "react";
import itemReducer from "../reducers/ItemReducer";

const ItemComponent = () => {
  // useReducer - gives us access to the current state and the ability to dispatch actions
  // takes in reducer and initial state as arguments
  const [state, dispatch] = useReducer(itemReducer, { items: [] });
  const [itemName, setItemName] = useState<string>("");

  const addItem = (event: FormEvent) => {
    event.preventDefault()
    const newItem = {
        id: Date.now(),
        name: itemName
    }
    //dispatch the proper action with payload and type
    dispatch({type: "ADD_ITEM", payload: newItem})
    setItemName("");
  }

  const removeItem = (id: number) => {
    dispatch({type: "REMOVE_ITEM", payload: id})
  }


  return (
    <div>
      <form onSubmit={addItem}>
        <input
          type="text"
          autoComplete="off"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {state.items.map((item) => (
          <li key={item.id}>{item.name}
          <button onClick={() => removeItem(item.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemComponent;

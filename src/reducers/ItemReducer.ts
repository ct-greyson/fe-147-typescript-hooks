import { ItemState } from "./ItemState";
import ItemComponentActions from "./ItemComponentActions";

const itemReducer = (
  state: ItemState,
  action: ItemComponentActions
): ItemState => {
  // I want to check the action.type to determine which reducer functionality I need
  /*
  if (action.type === "ADD_ITEM") {
    //add item
    // return new state
  } else if (action.type === "REMOVE_ITEM") {
    //remove item
    //return new state
  } else {
    // return state as is
  }
    */
  // switch statements work like if-else blocks where you need to check the value of a certain variable/property to see if it is equal to any of your cases

  // check the value of our action.type
  switch (action.type) {
    // same as if(action.type === "ADD_ITEM")
    case "ADD_ITEM":
      //Add an item to our state array
      const item = action.payload;
      // explicitly update the items property of our item state
      // ...state is saying hey, let's account for EVERY property in our ItemState.
      // in this case we only have a single property (our items array) but if there were more properties, we'd want to make sure we are including them in our new updated state object
      return { ...state, items: [...state.items, item] }; // updated state object REPLACES the current state

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    // default works like else {}, but it is required in a switch statement.
    default:
      // return our state as is
      return state;
  }
};

export default itemReducer;
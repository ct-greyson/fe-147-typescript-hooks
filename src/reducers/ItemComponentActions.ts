import { Item } from "./ItemState";
// action {type: "addItem", payload: {newItem}}

type ItemComponentActions =
  | { type: "ADD_ITEM"; payload: Item }
  | { type: "REMOVE_ITEM"; payload: number };

export default ItemComponentActions;
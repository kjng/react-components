let GroceryList = () => (
  <ul>
    <GroceryListItem item={groceryItems[0]}/>
    <GroceryListItem item={groceryItems[1]}/>
  </ul>
);

let groceryItems = ['Bananas', 'Milk'];

let GroceryListItem = (props) => (
  <li>{props.item}</li>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));
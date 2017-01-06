let GroceryList = () => {
  let groceryItems = [<GroceryListItem item='Bananas' key='1'/>, <GroceryListItem item='Milk' key='2'/>];

  return (
    <ul>
      {groceryItems}
    </ul>
  );
};

let GroceryListItem = (props) => (
  <li>{props.item}</li>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));

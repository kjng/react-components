let GroceryList = () => (
  <ul>
    <BananaComponent />
    <MilkComponent />
  </ul>
);

let BananaComponent = () => (
  <li>Bananas</li>
);

let MilkComponent = () => (
  <li>Milk</li>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));
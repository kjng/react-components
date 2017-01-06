let GroceryList = () => {
  let groceryItems = [<GroceryListItem item='Bananas' key='1'/>, <GroceryListItem item='Milk' key='2'/>];

  return (
    <ul>
      {groceryItems}
    </ul>
  );
};

// let GroceryListItem = (props) => (
//   <li>{props.item}</li>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bold: false
    };
  };

  onListItemHover() {
    this.setState({
      bold: !this.state.bold
    });
  };

  render() {
    let style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  };
};

ReactDOM.render(<GroceryList />, document.getElementById('app'));

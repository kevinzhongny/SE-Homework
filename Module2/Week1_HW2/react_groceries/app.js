const grocery = [
    {
        item: 'soda',
        brand: 'Coca-Cola',
        units: 'pack',
        quantity: 12,
        isPurchased: true
    },

    {
        item: 'chicken thighs',
        brand: 'Perdue',
        units: 'pieces',
        quantity: 6,
        isPurchased: false
    },

    {
        item: 'chocolate',
        brand: 'Twix',
        units: 'bars',
        quantity: 3,
        isPurchased: false
    },

]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grocery: grocery,
            item: '',
            units: '',
            quantity: 0,
            isPurchased: false
        };
    }

    render() {
        return(
            <div>
                <ul>
                    { this.state.grocery.map(groceryItem => {
                            return (
                                <GroceryList groceryItem={groceryItem} />
                            )
                        }
                    )}
                </ul>
            </div>
        )
    }
}

class GroceryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <li>{this.props.groceryItem.brand} {this.props.groceryItem.item} {this.props.groceryItem.quantity} {this.props.groceryItem.units}</li>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('container')
)
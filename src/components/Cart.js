import React, { Component } from 'react';

export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
        this.allStorage = this.allStorage.bind(this);
        this.calcPrice = this.calcPrice.bind(this);
        this.totalPrice = this.totalPrice.bind(this);
    }
    allStorage() {
        var archive = [],
            keys = Object.keys(window.localStorage),
            i = 0, key;

        for (; key = keys[i]; i++) {
            archive.push(JSON.parse(window.localStorage.getItem(key)));
        }
        return archive;
    }
    calcPrice(itemPrice, quantity) {
        return itemPrice * quantity;
    }
    totalPrice() {
        var total = this.state.items.reduce(function (total, currentValue, currentIndex, arr) {
            return total + (currentValue.price * currentValue.quantity);
        }, 0)
        return total;
    }
    componentWillMount() {
        let tempItems = this.allStorage();
        this.setState({ items: tempItems })
    }
    handleAddItem = (e) => {
        e.preventDefault();
        let id = parseInt(e.target.value);
        //Find and update item in state
        const tempItems = this.state.items;
        let itemIndex =this.state.items.findIndex(i => i.id === id);
        tempItems[itemIndex].quantity += 1;
        this.forceUpdate();
        //Find and update item in local storage
        window.localStorage.setItem(id,JSON.stringify(this.state.items[itemIndex]))

    }
    handleSubtractItem = (e) =>{
        e.preventDefault();
        let id = parseInt(e.target.value);
        const tempItems = this.state.items;
        let itemIndex =this.state.items.findIndex(i => i.id === id);
        if(tempItems[itemIndex].quantity === 1){
            tempItems.splice(itemIndex, 1);
            this.forceUpdate();
            window.localStorage.removeItem(id)
        }else{
            tempItems[itemIndex].quantity -= 1;
            this.forceUpdate();
            window.localStorage.setItem(id,JSON.stringify(this.state.items[itemIndex]))
        }
    }
    render() {
        return (
            <table className="table itemsTable">
                <thead>
                    <tr>
                        <th>Your Item</th>
                        <th></th>
                        <th>Item Price</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.items.map(item => (
                        <tr key={item.id}>
                            <td> <img className="card-img-top cart-img" alt="..." src={item.img} /></td>
                            <td>{item.title}</td>
                            <td>${item.price}</td>
                            <td>
                                <button type="submit" className="btn btn-light" value={item.id} onClick={this.handleSubtractItem}>-</button>
                                <span>{item.quantity}</span>
                                <button type="submit" className="btn btn-light" value={item.id} onClick={this.handleAddItem}>+</button>
                            </td>
                            <td>${this.calcPrice(item.price, item.quantity)}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total:</td>
                        <td>${this.totalPrice()}</td>
                    </tr>
                </tfoot>
            </table>
        )
    }
}
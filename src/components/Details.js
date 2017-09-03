import React, { Component } from 'react';
import collarsData from '../data/Collars';
import bowlsData from '../data/Bowls';
import carriersData from '../data/Carriers';

export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {},
            addItem: true
        }
    }

    componentWillMount() {
        let endpoint = this.props.match.params.endpoint;
        let id = parseInt(this.props.match.params.id);
        let tempItem;
        if (endpoint === "collars") {
            tempItem = collarsData.filter(item => item.id === id)[0]
        } else if (endpoint === "bowls") {
            tempItem = bowlsData.filter(item => item.id === id)[0]
        } else {
            tempItem = carriersData.filter(item => item.id === id)[0]
        }
        this.setState({ item: tempItem }, function () {
            if (window.localStorage.getItem(this.state.item.id)) {
                this.setState({ addItem: false })
            }
        })
    }
    handleCart = (e) => {
        e.preventDefault();

        if (this.state.addItem) {
            let addItem = {
                id: this.state.item.id,
                title: this.state.item.title,
                price: this.state.item.price,
                img: this.state.item.img,
                quantity: 1
            }
            window.localStorage.setItem(this.state.item.id, JSON.stringify(addItem));
        }
        else if (!this.state.addItem) {
            window.localStorage.removeItem(this.state.item.id);
        }
        this.setState(prevState => ({ addItem: !prevState.addItem }));
    }
    render() {
        return (
            <div className="media">
                <img className="d-flex mr-3 detail-img" src={this.state.item.img} alt="Dixon & Co" />
                <div className="media-body">
                    <h5 className="mt-5">{this.state.item.title}</h5>
                    <p>{this.state.item.description}</p>
                    <p className="text-muted">${this.state.item.price}</p>
                    <button type="submit" className="btn btn-light" onClick={this.handleCart}>
                        {this.state.addItem ? 'Add to Cart' : 'Remove Item'}
                    </button>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import carriers from '../data/Carriers.json';

export default class Carriers extends Component {
    render() {
        return (
            <div className="card-deck2">
                {carriers.map(carrier => (
                    <div key={carriers.id} className="card">
                    <Link to={`/details/carriers/${carrier.id}`}>
                        <img className="card-img-top"  alt="Dixon & Co" src={carrier.img}/>
                        <div className="card-body">
                            <h4 className="card-title">{carrier.title} <span className="text-muted">${carrier.price}</span></h4>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
        )
    }
}
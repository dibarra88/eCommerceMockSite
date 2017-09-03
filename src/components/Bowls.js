import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bowls from '../data/Bowls.json';

export default class Bowls extends Component {
    render() {
        return (
            <div className="card-deck2">
                {bowls.map(bowl => (
                    <div key={bowl.id} className="card">
                    <Link to={`/details/bowls/${bowl.id}`}>
                        <img className="card-img-top"  alt="Dixon & Co" src={bowl.img}/>
                        <div className="card-body">
                            <h4 className="card-title">{bowl.title} <span className="text-muted">${bowl.price}</span></h4>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
        )
    }
}
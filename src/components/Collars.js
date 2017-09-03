import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import collars from '../data/Collars.json';

export default class Collars extends Component {
    render() {
        return (
            <div className="card-deck2">
                {collars.map(collar => (
                    <div key={collar.id} className="card">
                    <Link to={`/details/collars/${collar.id}`}>
                        <img className="card-img-top"  alt="..." src={collar.img}/>
                        <div className="card-body">
                            <h4 className="card-title">{collar.title} <span className="text-muted">${collar.price}</span></h4>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
        )
    }
}
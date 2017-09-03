import React, { Component } from 'react';

import dogImg from '../img/dixie.jpg';
export default class Home extends Component {
    render() {
        return (
            <img src={dogImg} className="img-fluid img-thumbnail rounded mx-auto d-block mt-4 homeImg" alt="Dixon & Co" />
                )
    }
}
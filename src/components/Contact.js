import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="media">
                <div className="card-body">
                    <h4>Send us an Email</h4>
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" rows="10"></textarea>
                        </div>
                        <button type="submit" className="btn btn-light">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
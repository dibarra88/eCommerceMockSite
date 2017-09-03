import React, { Component } from 'react';

export default class AboutUs extends Component {
    render() {
        return (

            <div className="media mt-4">
                 <img src="./img/dixonLogo.jpg" alt="Dixon & Co" style={{width:"500px"}}/>
                <div className="media-body about">
                    <p> Here at Dixon & Co we pride ourselves at finding the most elegant items for your pup.
                    We were founded in 2017 by the visionary Dixon. He could not find the products that fit
                    his elegant lifestyle. So he set out to bring all the finest dog products to one website.
                    Our products will raise your pup to the regal lifestyle a dog can only come to expect. </p>
                </div>
               
            </div>

        )
    }
}
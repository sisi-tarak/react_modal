import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from './Context';
import Card from './Card';

class RecommendationSection extends Component {
    render(){
        return(
            <Consumer>
                {(value) => {
                    const {cards} = value;
                    return(
                        <div className="container-fluid my-5">
                            <div className="row text-center py-5 d-flex flex-nowrap overflow-auto footercourseslist">
                                {
                                    cards.map((card) =>
                                    (
                                        <div key={card.id} className="col-12 col-lg-4 my-1">
                                            <Card
                                               card = {card}
                                            />
                                        </div>
                                    )
                                    )
                                }  
                            </div>
                        </div>
                    );
                }}             
            </Consumer>
        );
    }
}

export default CardSection;

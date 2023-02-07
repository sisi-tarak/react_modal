import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from './Context';
import Recommendation from './Recommendation';

class RecommendationSection extends Component {
    render(){
        return(
            <Consumer>
                {(value) => {
                    const {recommendations} = value;
                    return(
                        <div className="container-fluid my-5">
                            <div className="row text-center py-5 d-flex flex-nowrap overflow-auto footercourseslist">
                                {
                                    recommendations.map((recommendation) =>
                                    (
                                        <div key={recommendation.id} className="col-12 col-lg-4 my-1">
                                            <Recommendation
                                                recommendation = {recommendation}
                                            />
                                        </div>
                                    )
                                    )
                                }  
                            </div>
                            <div className="pb-3 text-right">
                                <Link to="/recommendation/add" className="text-dark text-right" style={{textDecoration: "none"}}>
                                    <h5 className="font-weight-light">Add <span className="text-info">Recommendations</span>
                                        <i className="fas fa-arrow-right align-middle pl-1 pr-2"></i>
                                    </h5>
                                </Link>
                            </div>
                        </div>
                    );
                }}             
            </Consumer>
        );
    }
}

export default RecommendationSection;
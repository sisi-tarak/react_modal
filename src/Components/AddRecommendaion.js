import React, { Component } from 'react';
import { Consumer } from './Context';
import {v4 as uuid} from 'uuid';

class AddRecommendation extends Component {
    state = {
        title: "",
        excerpt: "",
        bodycontent: "",
        submitMessage: "",
        submitMessageTextColor: "",
    };
    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        });
    };
    onSubmit = (handler ,event) => {
        event.preventDefault();

        let isSuccessful = true;
        
        if(isSuccessful) {
            this.setState({
                submitMessage: "Recommendation Published Successfully!",
                submitMessageTextColor: "text-info",
            });
        }
        else {
            this.setState({
                submitMessage: "Publish Failed :(",
                submitMessageTextColor: "text-danger",
            });
        }

        const newRecommendation = {
            id : uuid(),
            title : this.state.title,
            excerpt : this.state.excerpt,
            bodycontent : this.state.bodycontent,
        };
        handler("ADD_RECOMMENDATION",newRecommendation);

    };

  render() {
    return(
        <Consumer>
            {(value) => {
                const {
                    title,
                    excerpt,
                    bodycontent,
                    submitMessage, 
                    submitMessageTextColor
                } = this.state;
                const {handler} = value;
                return (
                    <div className="container-fluid my-5 py-3">
                        <h1 className="text-center my-5 font-weight-light">Add <span className="text-info">Recommendation</span></h1>
                        <div className="row px-3 px-lg-5">
                            <div className="col-12 col-lg-6 px-lg-5">
                                <form onSubmit={this.onSubmit.bind(this, handler)}>
                                    <div className="form-group">
                                        <label htmlFor="title">
                                            Title *
                                        </label>
                                        <input type="text" name="title" id="title" className="form-control" onChange={this.onChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="excerpt">
                                            Excerpt *
                                        </label>
                                        <input type="text" name="excerpt" id="excerpt" className="form-control" onChange={this.onChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="bodycontent">
                                            Body *
                                        </label>
                                        <textarea name="bodycontent" id="bodycontent" cols="30" rows="5" className="form-control" onChange={this.onChange} required></textarea>
                                    </div>
            
                                    <button type="submit" className="btn btn-dark btn-block my-5" style={{backgroundColor:"black"}} >
                                        Publish
                                    </button>
            
                                    <div className="py-5 mx-2 text-center font-weight-light">
                                        <h5 className= {submitMessageTextColor} > {submitMessage}</h5>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 col-lg-6 markdown justify-content-center">                                       
                                <h1 className="font-weight-light text-center my-3">
                                    {title}
                                </h1>
                                <h5 className="font-weight-light"> {bodycontent} </h5>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Consumer>
    );
    
  }
}

export default AddRecommendation;
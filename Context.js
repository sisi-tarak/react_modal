import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
    handler = (action, newObject) => {
        switch (action) {
            case "ADD_CARD":
                this.setState({
                    cards : [newObject,...this.state.cards],
                });
                break;
        }
    };

    state = {
        handler : this.handler,
        cards : [
            {
                id : 1,
                title : "He is Quick and Very Active Learner & Effective Developer ",
                excerpt : "Random Guy 1",
                bodycontent : "CEO at RS Comapny",
            },
            {
                id : 1,
                title : "He is a Excellent Developer",
                excerpt : "Random Guy 2",
                bodycontent : "Manager at NS Comapny",
            },
            {
                id : 1,
                title : "He done so Quickly & Effectively",
                excerpt : "Random Guy 3",
                bodycontent : "HR at SUN Comapny",
            },
            {
                id : 1,
                title : "Good Knowledge about Devloping",
                excerpt : "Random Guy 4",
                bodycontent : "CEO at MS Comapny",
            },
    
        ],
    }
  render() {
    return (
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;

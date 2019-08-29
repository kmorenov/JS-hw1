import React, {Component} from 'react';
import './App.css'

import Post from './Cart/Post'

import {BrowserRouter, Router, Route, Switch, NavLink} from 'react-router-dom';
import CartContent from "./Cart/CartContent";

class App extends Component {

    state = {
        postIds: [],
        counter: 0,
        cartItems: []
    }

    getPostIds = () => {
        return fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((response) => {
                let unqAbumId
                const arr = []
                for (let i = 0; i < response.length; i++) {
                    arr[i] = response[i].userId
                }
                for (let i = 0; i < arr.length; i++) {
                    unqAbumId = arr.reduce(
                        (distinct, albums) =>
                            (distinct.indexOf(albums) !== -1) ?
                                distinct :
                                [...distinct, albums],
                        []
                    )
                }
                this.setState({postIds: unqAbumId})
            })
    }

    updateCounter = (comment) => {

        this.setState({counter: this.state.counter + 1})
        let arr = [...this.state.cartItems]
        arr.push(comment.id)
        this.setState({cartItems: arr})
    }

    componentDidMount() {
        this.getPostIds()
        // this.getComments()
    }

    render() {
        return (
            <BrowserRouter>
                <div className="toast">
                    <NavLink to="/" activeClassName="active" exact><strong>Home </strong></NavLink>
                    <NavLink to="/cart" activeClassName="active"><strong>Cart: </strong>{this.state.counter}</NavLink>
                    <Switch>
                        <Route path="/cart"
                               component={props => <CartContent {...props} counter={this.state.counter}
                                                                cartItems={this.state.cartItems}/>}
                        />

                        <div className="toast-header">
                            {this.state.postIds.map(post => {
                                return <Post post={post} updateCounter={this.updateCounter}/>
                            })}
                        </div>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

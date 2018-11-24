import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class app extends Component {

    componentDidMount() {
        this.props.fetchuser();
    }

    render() {
        return (
            <div className='container'>
                <BrowserRouter>
                    <div>
                        <Header></Header>
                        <Route path='/surveys' component={Dashboard} exact></Route>
                        <Route path='/surveys/New' component={SurveyNew}></Route>
                        <Route path='/' component={Landing} exact></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(app);
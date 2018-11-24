import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const app = () => {
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

export default app;
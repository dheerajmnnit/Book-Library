import React from './../../node_modules/react';
import { Router, Route, Switch } from './../../node_modules/react-router-dom';
import allBook from '../Components/Pages/allBook';

import editBook from '../Components/Pages/editBook';
import history from './history';
const router = props => {
    return <Router history={history}>
        <Switch>
            <Route exact path="/" component={allBook} />
            <Route exact path="/addbook" component={editBook} />
            <Route exact path="/editbook" component={editBook} />
        </Switch>
    </Router>;
};

export default router




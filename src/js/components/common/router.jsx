import React from 'react'
import { Route, Switch} from 'react-router-dom'
import HomeContainer from '../../container/home'
import SearchContainer from '../../container/search'
import DetailsContainer from '../../container/details'

const Routes = () => (
    <div>
        <Switch>
            <Route exact path='/' component={ HomeContainer }/>
            <Route exact path='/search' component={ SearchContainer }/>
            <Route path='/search/:id' component={ SearchContainer }/>
            <Route path='/details/:id' component={ DetailsContainer }/>
            <Route component={HomeContainer}/>
        </Switch>
    </div>
)
export default Routes

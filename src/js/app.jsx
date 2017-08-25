import React from 'react'
import Routes from './components/common/router'
import NavBar from './components/common/navbar'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import techinfomasterReducer from './reducers'
import { rootSaga } from './sagas/saga.js'
import createSagaMiddleware from 'redux-saga'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, browserHistory } from 'react-router-dom'
import '../css/bootstrap.css'
import '../css/app.less'
import Footer from './components/common/footer'
import { API_URL } from './constants/constants'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(techinfomasterReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const App = () => (
    <div>
     <ul className='topnav'>
            <img className='avatar' src={ API_URL+'/techfinder.png' }/>
        </ul>
        <nav>
          <NavBar/>
        </nav>
    <div className='row'>
      <div className='col-md-12'>
        <main>
          <Provider store={ store }>
          <Routes/>
          </Provider>
        </main>
      </div>
   </div>
   <Footer/>
   </div>
)
ReactDOM.render(
    <Router history={ browserHistory }>
      <App/>
    </Router>
    , document.getElementById('container')
)

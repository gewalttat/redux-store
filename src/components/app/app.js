import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ShopHeader from '../shop-header/shop-header'
import HomePage from '../pages/home-page'
import CardPage from '../pages/card-page'

const App = () => {
    return (
        <main role='main' className='container'>
        <ShopHeader numItems={5} total={210}/>
        <Switch>
        <div className='bookstore-app'>
            <Route 
            path='/'
            component = {HomePage}
            exact/>

            <Route path='/card'
              component = {CardPage}/>
        </div>
        </Switch>
        </main>
    )
}

export default App;
import React from 'react'
import ST from './index.scss'
import Info from './Info'
import LP from './LP'
import {
    Switch,
    Route,
  } from "react-router-dom"


class App extends React.Component {

    render(){
        return(
            <div className={ST.wrapper}>
                <Switch>
                    <Route exact path='/' children={<Info />}/> 
                    <Route exact path='/landingpage' children={<LP />}/> 
                </Switch>
            </div>
        )
    }
}

export default App
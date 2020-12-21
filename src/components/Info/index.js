import React from 'react'
import ST from './index.scss'
import figma from '../../assets/FIGMA.png'
import freebies from '../../assets/FREEBIES.png'
import logo from '../../assets/logo.png'

import Link from 'react-router-dom'


class Info extends React.Component{
  render(){
    return(
      <div className={ST.info_wrapper}>

        <div className={ST.info_logo}>
          <img src={logo}/>
          <div className={ST.logo_titles}>
            <img src={figma}/>
            <img src={freebies}/>
          </div>
        </div>

        <div className={ST.info_info}>
          
          <div className={ST.made}>
            Made by
          </div>

          <div className={ST.text}>

            <p className={ST.name}>Kshitij Choudhary</p>
            <p className={ST.ux}>UI/UX Designer & Developer</p>
            
            <div className={ST.links}>
              <a href='twitter.com/howbadeh'>twitter.com/howbadeh</a>
              <a href='dribbble.com/itskshitij'>dribbble.com/itskshitij</a>
              <a href='kshitij.ws'>kshitij.ws</a>
            </div>
            
            <p className={ST.about}>If you like what I am doing , you can support me by following me on dribbble</p>
            
            <Link to='/landingpage'>
              <div className={ST.button}>
                Watch landing page
              </div>
            </Link>

          </div>

        </div>
      
      </div>
    )
  }
}

export default Info
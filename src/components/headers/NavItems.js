import React from 'react';
import "../../styles/HeaderStyles/NavItems.css"

class  NavItems extends React.Component{
  render() {
    return(
      <div className='NavItems'>
        
        <li>{this.props.main}</li>
        <li>{this.props.info}</li>
        <li>{this.props.about}</li>
       
      </div>
    )
  }
}

export default NavItems;
import React from 'react';
import './Card.css';
import Thumbnail from '../HeaderComponents/ImageThumbnail'
import Title from '../HeaderComponents/HeaderTitle'
import Header from '../HeaderComponents/HeaderContent'
import Container from '../HeaderComponents/HeaderContainer'



function Card (){
  return (
      <div className="hi">
         
          <Thumbnail className="img" />
       
            <Title />
            <Header />
            <Container />






      </div>
  )
}



export default Card
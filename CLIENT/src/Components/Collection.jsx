import React from 'react'
import './collection.css'
function Collection() {
  return (
    <div>
        <div class = "sub_heading__container">
    <span><h3>Collection in Restro</h3></span>
    <span id = "span">All collections in bhopal</span>
  </div>
  <div class = "collections__cards_container">
    <div class = "cards card1">
      <div class = "overlay">
                    <img  src="https://plus.unsplash.com/premium_photo-1661667075996-18a04b626fe2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
      <div class = "collections__content">
        <h4>Live Cricket Screening</h4>
        <span>56 places</span>
      </div>
    </div>
    <div class = "cards card2">
      <div class = "overlay">
                    <img  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
      <div class = "collections__content">
        <h4>Koregaon Park specials</h4>
        <span>12 places</span>
      </div>
    </div>
    <div class = "cards card3">
      <div class = "overlay">
            <img   src="https://media.istockphoto.com/id/1337755660/photo/luchi.jpg?s=1024x1024&w=is&k=20&c=UiGHMYXMgRFqjXtlbkmEd8wEUDkga51wsl3XLj64aOY="/> 
                </div>
      <div class = "collections__content">
        <h4>Newly opened Restaurants</h4>
        <span>36 places</span>
      </div>
    </div>
    <div class = "cards card4">
      <div class = "overlay">
            <img   src="https://plus.unsplash.com/premium_photo-1676106623769-539ecc6d7f92?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> 
                </div>
      <div class = "collections__content">
        <h4>Trending Pubs Near me</h4>
        <span>16 places</span>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Collection
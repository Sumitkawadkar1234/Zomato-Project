import React from 'react'
import './footer.css'
const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
const Footer = () => {
  return (
    <div className='mt-5 footer'>
      <div className='container w-75'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='Logo'>
            <img   style={{ width: '8rem' }} src={zomatologo} />
          </div>
          <div className="input">
                <select name="" id="">
                    <option value="Chennai">Chennai</option>
                    <option value="Jaipur">Jaipur</option>
                    <option selected value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Kolkata">Kolkata</option>
                </select>
                <select name="" id="">
                    <option value="English">English</option>
                    <option value="JHindi">Hindi</option>
                    <option selected value="Japian">Japian</option>
                    <option value="Fransh">Fransh</option>
                    <option value="Chayni">Chayni</option>
                </select>
        </div>
        </div>
        <div className='text mt-5 d-flex justify-content-between align-items-center'>
          <div>  <h6>  ABOUT ZOMATO</h6>   <h6> Who We Are</h6>  <h6> Blog</h6>  <h6>Contact Us</h6> </div>
          <div>  <p> ZOMAVERSE</p>   <p> Zomato</p>  <p>  Feeding India</p>   </div>
          <div>  <p> FOR RESTAURANTS</p>   <p> Partner With Us</p>  <p> Apps For You</p>   </div>
          <div>  <p> LEARN MORE</p>   <p> Partner With Us</p>  <p>  Apps For You</p>   </div>
          <div>  <p> SOCIAL LINKS</p>   <p> Privacy</p>  <p> Terms</p>  <p>Security</p> </div>
          <div>  <p>SOCIAL LINKS</p>  <p></p></div>
        </div>
      </div>
    </div>
  )
}
export default Footer
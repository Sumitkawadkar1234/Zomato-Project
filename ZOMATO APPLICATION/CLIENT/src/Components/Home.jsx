import React from 'react';
import '../App.css'
import {NavLink} from 'react-router-dom';
import {FaUserAlt}  from 'react-icons/fa';
import {BiLogInCircle}  from 'react-icons/bi';
import Logo from '../Images/Zomato-Logo.png'
import Background from '../Images/BackGround.png'
import Card from './Card';
import City from './City';
import Footer from './Footer';
import AddRestaurant from './AddRestaurant';
import View from './View';
import Collection from './Collection';
import {useState,useEffect} from 'react';

// Supabase password =CCzogaRG8U4FHHQ1
//key = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6aWV6ZGRoZ2RsYXlsaGxqeHVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMTM3ODcsImV4cCI6MjAyNjU4OTc4N30.tKBJP0WDF43EJxXg_Oy94EqD5YCK2Sh8znTJurMJUTM
// url=https://sziezddhgdlaylhljxuc.supabase.co

const Home = () => {

    const [data, setData] = useState(null);

    useEffect(() => {

         let data=   localStorage.getItem('userData')
         console.log(data,"dataaaaaaaa");
        let newData=  JSON.parse(data)
        console.log(newData,"newData");

        setData(newData)
 
    }, []);

       let remove=()=>{
        localStorage.clear('userData')
        setData(null)
       }


  return (
    <div>
    <div className='parent'>
        <img className='img' src={Background} alt="logo" />   {/* background image */}
        <div className='icons-bg'>
        <div className='div1'>
            <span className='floar-right1'> <NavLink   to='/view' className='color-b'>View Food</NavLink> </span> 
            <span className='floar-right2'> <NavLink   to='/AddRestaurant' className='color-b'>Add Restaurant</NavLink> </span> 
        </div>
        <div className='div2'>   
            {/* <span className='floar-right1'> <FaUserAlt/> <NavLink  to='/signup'  className='color-b'>Sign-up</NavLink> </span> 
            <span className='floar-right2'> <NavLink  to='/login' className='color-b'>Login</NavLink> <BiLogInCircle/> </span>  */}


{
//    data? (  <>   <p> {  data.userData.name} </p>
//     <span  onClick={remove}   className='floar-right2'> <NavLink  className='color-b'>Logout</NavLink> <BiLogInCircle/> </span>  

//     </>

//    ):

   (     <>   
   <span className='floar-right1'> <FaUserAlt/> <NavLink  to='/signup'  className='color-b'>Sign-up</NavLink> </span> 
   <span className='floar-right2'> <NavLink  to='/login' className='color-b'>Login</NavLink> <BiLogInCircle/> </span>    </>  )
}


        </div>
        </div>
        <div className='heading-zomato'>
        <img src={Logo} alt="logo" />
        </div> 
         <div className='input-search'>
            <h3 id='h3'>Discover the best food & drinks</h3>
                <div className="input">
                <select name="" id="">
                    <option value="Chennai">Chennai</option>
                    <option value="Jaipur">Jaipur</option>
                    <option selected value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Kolkata">Kolkata</option>
                </select>
                <input type="text" placeholder="Search for restaurant or a dish"/>
                </div> 
        </div> 
    </div>
<Card/>
<Collection/>
<section>
<City/>
</section>
<footer>
    <Footer/>
</footer> </div>
  )
}
export default Home
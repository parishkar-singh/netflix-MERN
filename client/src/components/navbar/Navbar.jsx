import React from 'react'
import "./navbar.scss"
const Navbar=()=>{
    return(
       <div className='navbar'>
           <div className="container">
               <div className="left">
                   <img src="https://images.crowdspring.com/blog/wp-content/uploads/2016/06/27132348/netflix-new-logo.png" alt=""/>
               <span>Homepage</span>
               <span>Series</span>
               <span>Movies</span>
               <span>New and Popular</span>
               <span>My List</span>
               </div>
               <div className="right">
                   
               </div>
           </div>
       </div> 
    )
}
export default Navbar
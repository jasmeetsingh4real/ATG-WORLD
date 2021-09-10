import React from 'react'
import '../Styles/card_style.css'
import {TiEyeOutline ,TiCalendar,TiLocationOutline,TiShoppingBag} from "react-icons/ti";
import { useState } from 'react'
const Card=({
    EventCard = false,
    EventDate="",
    EventLocation="",

    JobCard = false,
    JobCompany ="",
    JobLocation = "",

    NeedCoverImage =true,
    coverImage="",
    cardType="✍ Article",
    heading="This is Default Heading",
    description="",
    profilePic="https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1632096000&Signature=ILbRzVZogM9A82PHowbeErzI1bbpcYftfvVNaGevl0hNPNZPEMr7eQoxWNDCyK99c812sAbgNAyCRybfRlwktBj22aM8lzQ6WXff3TuYCjUQntFdf0rfRD7WG0~nR~W1bgEl0r-JmBnOASOkdffnb3jCUaH8se99giYbp1f9dx2QaGIXZJUnZQsvy8yZ~3FTh8o-ajcCXY3qPWL3AKBsh5R7xTnk7KqcYLlvBMwYHZ5BPdeOT~t6jxpFisk6DrjgscZKRZ8Q~Zpb1QuxnJFSm9AXKGwtnxRSY5RYfjVePeZiNsIzWesd4g~wJvE6x1Inw~KP5nSQrIh0EkORjkvKeA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    userName="User-name",
    viewCount=1.4,
    children
})=>{
   const [menu,setMenu]= useState(false)
   const toggleMenu = (e)=>{
       e.preventDefault()
       setMenu(!menu);
   }
   const coverImageViewer =()=>{
       if(NeedCoverImage){
           return( <img src={coverImage} alt="coverImage" className="coverImage"/>)
       }
   }
   const EventInfoViewer=()=>{
       if(EventCard){
           return(
               <div className="eventCard">
                   <div className="eventDetail">
                        <div><h4><TiCalendar/> {EventDate}</h4></div>
                        <div><h4><TiLocationOutline/> {EventLocation}</h4></div>                        
                   </div>
                   <div>
                    <button className="EventBtn">Vist Website</button>
                   </div>
               </div>
           )
       }
   }
   const JobInfoViewer=()=>{
    if(JobCard){
        return(
            <div className="JobCard">
                <div className="JobDetail">
                     <div><h4><TiShoppingBag/> {JobCompany}</h4></div>
                     <div><h4><TiLocationOutline/> {JobLocation}</h4></div>                        
                </div>
                <div>
                 <button className="JobBtn">Apply on Timesjobs</button>
                </div>
            </div>
        )
    }
}


   

    return (
        <div className="card">

            {/* <img src={coverImage} alt="coverImage" className="coverImage"/> */}
            {coverImageViewer()}

            <div className="cardInfo">
                <h4>{cardType}</h4>
                <div className="cardHeading">
                    <div><h3>{heading}</h3></div>
                    <div className="dropdown"><button  className="dropdownBtn" onClick={toggleMenu}></button></div>
                    {/* <div className="dropMenuBtn">
                    <div name="Jas" id="" value ="" className="dropdown">
                        <option value="">Edit</option>
                        <option value="">Report</option>
                        <option value="">Option 3</option>
                    </div>
                    </div> */}
                     {menu?(
                         <div className="menuOptions">
                             <button onClick={toggleMenu}>Edit</button>
                             <button onClick={toggleMenu}>Report</button>
                             <button onClick={toggleMenu}>Option 3</button>
                         </div>
                         ):null}
                         
                </div>
                <p className="cardDesc">{description}</p>
            </div>
            <div className="child" >{children}</div>

            {EventInfoViewer()}
            {JobInfoViewer()}
                <div className="cardFooter cardInfo">   

                    <div className="profilePic"> <img src={profilePic} alt="dp" /></div>
                    <div><h4>{userName}</h4></div>
                    <div className="views"><TiEyeOutline/>{viewCount}k views </div>
                    <div className="shareBtn"></div>

                </div>
           
        </div>
    )
}
export default Card

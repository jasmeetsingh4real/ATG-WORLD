import React from 'react'
import './Styles/menu.css'
import {NavLink} from 'react-router-dom';
import { TiArrowSortedDown } from "react-icons/ti";
import { FiUsers } from "react-icons/fi";
export default function Menu() {
    let postcount ="32"
    return (
        <div className="desktop_menu">
            <div className="menuItems">
                <NavLink className='inactive' exact activeClassName='activelink' to='/'>All Posts({postcount})</NavLink>
                <div className='inactive' >Articles</div>
                <div className='inactive' >Events</div>
                <div className='inactive' >Education</div>
                <div className='inactive' >Job</div>
                <div className="smMenuBtn"> Posts({postcount})</div>
            </div>

            <div className="menuBtns">
                <button className="joinGrpBtn"><FiUsers/> Join Group</button> 
               <button className="writeAPostBtn">Write a Post <TiArrowSortedDown/></button>
               <button className="smFilterBtn">Filter All<TiArrowSortedDown/></button>
            </div>
        </div>
    )
}

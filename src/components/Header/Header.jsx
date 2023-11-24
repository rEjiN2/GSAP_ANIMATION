"use client"
import React,{useRef,useState,useEffect} from 'react'
import styles from './Header.module.css'
import { gsap,Power3 } from 'gsap'
const Header = () => {
  let timeline = new gsap.timeline();
  let ease = Power3.easeOut();


  let logo = useRef(null)
  let menu_item1 = useRef(null) 
  let menu_item2 = useRef(null) 
  let menu_item3 = useRef(null) 

  useEffect(()=>{
timeline.from(logo,1,{
  opacity:0,
  y:'100'
})

timeline.from([menu_item1,menu_item2,menu_item3],2,{
  opacity:0,
  y:'-200',
  stagger:{
    amount:.4
  },
  ease:ease
})

  })
  return (
    <div>
        <div className={styles.header}>
            <div className={styles.logo} ref={el => logo = el}>
                Logo
            </div>
            <div className={styles.menu}>
            <div className={styles.menuItems} ref={el => menu_item1 = el}>
                About
            </div>
            <div className={styles.menuItems} ref={el => menu_item2 = el}>
                Journal
            </div>
            <div className={styles.menuItems} ref={el => menu_item3 = el}>
                Contact
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Header
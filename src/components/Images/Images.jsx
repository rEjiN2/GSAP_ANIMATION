"use client"


import React,{useRef,useEffect} from 'react'
import styles from './images.module.css'
import { gsap,Power3 } from 'gsap/gsap-core'
const Images = () => {
  let timeline = new gsap.timeline();
  let ease = Power3.easeOut();
  let box1 = useRef(null)
  let box2 = useRef(null)
  let box3 = useRef(null)

  useEffect(()=>{
    timeline.from(box1,1.2,{
            y:1200,
            ease:ease,
            opacity:0
    },"-=1")
    .from(box1,2,{
      scale:1.6,
      ease:ease,
} , "-=1.2");
timeline.from(box2,1.2,{
  y:1200,
  ease:ease,
  opacity:0
},"-=1")
.from(box2,2,{
scale:1.6,
ease:ease,
} , "-=1.5");
timeline.from(box3,1.2,{
  y:1200,
  ease:ease,
  opacity:0
})
.from(box3,2,{
scale:1.6,
ease:ease,
} , "-=1.5");
   
  
  })
     
  return (
    <div>
        <div className={styles.images}>
            <div className={styles.box1} ref={el => (box1 = el)}></div>
            <div className={styles.box2} ref={el => (box2 = el)}></div>
            <div className={styles.box3} ref={el => (box3 = el)}></div>
        </div>
    </div>
  )
}

export default Images
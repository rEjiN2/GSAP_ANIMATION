"use client"
import React,{useRef,useEffect} from 'react'
import styles from './Content.module.css'
import { gsap,Power3 } from 'gsap'
const Content = () => {
 
  let timeline = new gsap.timeline();
  let ease = Power3.easeOut();
  let h1 =useRef(null);
  let pText =useRef(null);

  
  let btn = useRef(null);
  useEffect(()=>{
    timeline.from(h1,1,{
      opacity:0,
      y:'100',
      visibility: "visible",
      skewY:10,
      stagger:{
        amount:.4
      }
    },"-=1")
    
    timeline.from(pText,2,{
      opacity:0,
      y:'-200',
      skewX:10,
      stagger:{
        amount:.4
      },
       ease:ease
    })

    timeline.from(btn,3,{
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
          <div className={styles.content}>
              <h1 className={styles.contentinnerbold} ref={el => h1 = el}>
              <div className={styles.h1div}>Be the best in your talents</div>
              <br />
              <div className={styles.h1div}>Aquire the skills that others didn't have</div>
              </h1>
              <p className={styles.pdiv} ref={el => pText = el}>A Self-motivated Full Stack Developer with deep knowledge and proficiency in Node.js, Next.js, React.js, Ex-
press.js, MongoDB, JavaScript, HTML, CSS, and responsive website development, as well as highly potent skills
and ability in problem-solving </p>
              <button className={styles.contentButton} ref={el => btn = el}>
  <svg className={styles.buttonsvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
  <span className={styles.buttonspan}>Know me</span>
</button>
          </div>
      </div>
  )
}

export default Content
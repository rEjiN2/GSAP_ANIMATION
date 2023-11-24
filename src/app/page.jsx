import Content from '@/components/Content/Content.jsx'
import React from 'react'
import styles from './page.module.css'
import Images from '@/components/Images/Images.jsx'

const Main = () => {

  
  return (
    <div className={styles.container}>
    
       <Content />
       <Images  />
      </div>
  )
}

export default Main

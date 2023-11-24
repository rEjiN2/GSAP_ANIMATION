import Content from '@/components/Content/Content'
import React from 'react'
import styles from './page.module.css'
import Images from '@/components/Images/Images'

const Main = () => {

  
  return (
    <div className={styles.container}>
    
       <Content />
       <Images  />
      </div>
  )
}

export default Main

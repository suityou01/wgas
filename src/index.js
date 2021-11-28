import React from 'react'
import styles from './styles.module.css'
import { CustomContext } from '../example/src/CustomContext'

export function ExampleComponent() {
  return (
    <CustomContext.Consumer>
      {(value)=>(
        <div className={styles.test}>Example Component: {value}</div>
      )}
    </CustomContext.Consumer>
  )
}

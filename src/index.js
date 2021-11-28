import React from 'react'
import styles from './styles.module.css'
import { SubCustomContext } from './SubCustomContext'

function ExampleComponent() {
  return (
    <SubCustomContext.Consumer>
      {(value)=>(
        value.increment("ExampleComponent") === undefined && console.log(value)===undefined &&  
        <div className={styles.test}>Example Component: {value.value} and counter == {value.counterValue()}</div>
      )}
    </SubCustomContext.Consumer>
  )
}

export {
  SubCustomContext,
  ExampleComponent
}
import React from 'react'
import RelativeComponent from './relativeComponent'

const App = () => {
  const relative = ["Ram" , "Shyam" , "Sita" , "Geeta"];

  const rc = relative.map((name , index)=>{
    return <RelativeComponent key={name + index} name={name}/>
  })
  return (
    <div id="main">
      <h1>Relative List</h1>
        <ol>
          {rc}
        </ol>
    </div>
  )
}

export default App

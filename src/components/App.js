import React from 'react';

const App = () => {
  const relatives = ["relative1", "relative2", "relative3", "relative4"];

  return (
    <div id="main">
      <ol id="relativeList" key={"relativeList"}>
        {relatives.map((relative, i) => (
          <li id={`relativeListItem${i + 1}`} key={`relativeListItem${i + 1}`}>
            {relative}
          </li>
        ))}
      </ol>

    </div>
  )
}

export default App;

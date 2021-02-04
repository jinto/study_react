import React from 'react'

function Movie(props) {
  var { fav, some , papa } = props;
  return <h3>감자감자감자 진짜? { fav } {papa}</h3>;
}

function App() {
  return (
    <div>
      <h1>요기에 제목을...</h1>
      <Movie fav='Kimchi' some={true} papa={['aa', 1, 2]} />
    </div>
  );
}

export default App;

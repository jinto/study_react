import React from 'react'

function Movie(props) {
  var { fav, pic , papa } = props;
  return (
    <div>
      <h3>감자감자감자 진짜? { fav } {papa}</h3>
      <img width="100px" src={pic}></img>
    </div>
  );
}

const foodLikes = [
  {
    name: '오코노미야키',
    image: 'https://d20aeo683mqd6t.cloudfront.net/images/imgs/000/015/197/original/image001.jpeg?1561111369&d=750x750'
  },
  {
    name: '타코야끼',
    image: 'https://d20aeo683mqd6t.cloudfront.net/images/imgs/000/015/214/original/image006.jpeg?1561342506&d=750x750'
  }
]
function App() {
  return (
    <div>
      <h1>요기에 제목을...</h1>
      {
        foodLikes.map(dish => (
          <Movie fav={dish.name} pic={dish.image} />
        ))
      }
    </div>
  );
}

export default App;

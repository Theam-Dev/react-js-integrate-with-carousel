import React from 'react';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import p1 from './assets/p1.jpg';
import p2 from './assets/p2.jpg';
import p3 from './assets/p7.jpg';
import p4 from './assets/p6.jpg';
import p5 from './assets/p5.jpg';
class App extends React.Component {
  state = {
    images: [
      p1,p2,p3,p4,p5
    ]
  }
  render(){


  return (
    

    <Carousel autoPlay>
      {this.state.images.map((post) => (
    <div >
        <img src={post} />
    </div>
    ))}
    
</Carousel>
  );
}
}

export default App;

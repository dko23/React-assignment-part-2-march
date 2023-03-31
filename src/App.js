
import snoopy from './Images/snoopy.png'
import './App.css';
import React, { Component } from 'react';

function Title(props) {
  return (
    <div>
      <h1 className='title'>{props.title}</h1>
    </div>
  )
}



 class Description extends Component {
  render() {
    return (
      <div>
        <p className='des'>{this.props.name}</p>
      </div>
    )
  }
}


function Picture(props) {
  return (
    <div>
      <img src={props.img} className='logo'/>
    </div>
  )
}



 class SimpleCard extends Component {
  render() {
    return (
      <div className='main'>
      <div className='comp2'>
      <Picture img={snoopy}/>
      </div>
      <div className='comp1'>
      <Title title='Snoopy' />
    <Description name='Snoopy is not your average beagle. He is a book lover and a book writer. He is a collector of fine art and a root beer connoisseur. Plus, his unstoppable imagination helps keep his life anything but ordinary.'/>
    </div>
    </div> 
    )
  }
}

function App() {
  return (
    <>
      <SimpleCard/>
    </>
  );
}

export default App;






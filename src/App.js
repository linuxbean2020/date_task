import React from 'react';
import './App.css';
// import DatePickerDemo from './components/DatePickerDemo';
import Carousel from './components/Carousel';

class App extends React.Component{
  constructor(props){
    super(props);    
    this.state = {
      startDate: new Date()
    };
  }
  render(){
    return(
      <div className="App" >      
        <Carousel maxItems='4' baseItem='3'/>
        {/* <DatePickerDemo startdate={this.state.startDate} /> */}
      </div>
    )
  }
}
  
export default App;
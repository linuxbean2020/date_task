import React from 'react';
import './App.css';
import DatePickerDemo from './components/DatePickerDemo';

class App extends React.Component{
  constructor(props){
    super(props);    
    this.state = {
      startDate: new Date()
    };
  }
  render(){
    return(
      <div className="App" style={{padding:100}}>      
        <DatePickerDemo startdate={this.state.startDate} />
      </div>
    )
  }
}
  
export default App;
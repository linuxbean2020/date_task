import React,{ Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class DatePickerDemo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            startDate: props.startdate
        };
        this.onDateSelected = this.onDateSelected.bind(this);       
    }

    onDateSelected(date) {
        this.setState({
            startDate: date
          },() => { console.log('selectedDate',this.state.startDate); })
    }   

    render() {
        return (
        <DatePicker
            className='date_picker_class'
            selected={this.state.startDate}
            onChange={this.onDateSelected}
            minDate={this.state.startDate}
            // minDate = {<CurrentDate startDate/>}
            dateFormat="d MMMM yyyy"
        />
        );
    }
}

export default DatePickerDemo;
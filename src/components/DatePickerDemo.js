import React,{ Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class DatePickerDemo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.onDateSelected = this.onDateSelected.bind(this);
    }

    onDateSelected(date) {
        this.setState({
            startDate: date
        });
        console.log(this.state.startDate);
    }

    render() {
        return (
        <DatePicker
            selected={this.state.startDate}
            onChange={this.onDateSelected}
            minDate={this.state.startDate}
        />
        );
    }
}

export default DatePickerDemo;
import React,{ Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class DatePickerDemo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            itemId: props.itemid,
            startDate: props.startdate
        };
        this.onDateSelected = this.onDateSelected.bind(this);       
    }

    onDateSelected(date) {
        this.props.test(date,this.state.itemId);
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
            dateFormat="d MMMM yyyy"
        />
        );
    }
}

export default DatePickerDemo;
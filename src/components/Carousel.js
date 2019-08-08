import React from 'react';
import Slider from "react-slick";
import DatePickerDemo from './DatePickerDemo';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

class Carousel extends React.Component {

  constructor(props){
    super(props);
    this.state={
      maxItems:this.props.maxItems,
      baseItem:this.props.baseItem,
      selectedId:'',
      index:-1,
      count:0,
      items :[
        
      ]
    };
    this.addItem = this.addItem.bind();
    this.removeItem = this.removeItem.bind();
    this.updateItem = this.updateItem.bind();
  }

  addItem = () => {
    if(this.state.maxItems<=(this.state.count)){
      return false;
    }
    else{
    this.setState(state => {
      const items = [...state.items, {id:this.state.index+1,value:'Quote '+(this.state.index+2)}];

      return {
        items,
        index:this.state.index+1,
        count:this.state.count+1
      };
    });
    }
  };

  removeItem = i => {
    this.setState(state => {
      const items = state.items.filter((item, id) => item.id !== i);
      return {
        items,
        count:this.state.count-1
      };
    });
  };

  showDate = (id) =>{
   this.setState({
    selectedId:id
   })
  }

  updateItem = (date,id) =>{
  let newItems =[];
  newItems = this.state.items;
  let items = newItems.map(function(item) {
       var obj = Object.assign({}, item);
       if(item.id === id){
        obj.date = ''+date;
       }
        return obj;
      })
      console.log('result:',items);
 
      this.setState(state => {
        return {
          items
        };
      });
  }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: this.state.baseItem,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: this.state.baseItem,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
    const listItems = this.state.items.map((item,index) =>
        <div className="outer_div" key={index} >          
            <div className="header_div">  
                <div><h2><small className="close" id={item.id} onClick={() => this.removeItem(item.id)}></small>{item.value} </h2></div>
            </div>
            <div className="content_div">            
              <div>                
                {!item.date ? ( <button className="show_date" onClick={()=>this.showDate(item.id)}>Show Date</button>) : <DatePickerDemo itemid={item.id}  test = {this.updateItem} className="hide" startdate={new Date(item.date)} />}
              </div> 
              {!item.date ?
              <div> 
                {item.id === this.state.selectedId ? <DatePickerDemo  itemid={item.id}  test = {this.updateItem} className="hide" startdate={new Date()} />: ''}
              </div>
              :''}
            </div>          
        </div>        
    );


    return (
      <Slider {...settings}>
        {listItems}
        {this.state.maxItems>this.state.count?
        <div className="add_quote_outer_div"> 
          <button className="add_quote" onClick={this.addItem}><h1>Add Quote</h1></button>
        </div>
        :''}
      </Slider>
    );
  }
}

export default Carousel;
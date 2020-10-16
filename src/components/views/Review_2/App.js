import React from 'react';
import './App.css';
//import Colors from './Colors'
import DetailsThumb from './DetailsThumb';

class App extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "unesco-science-report",
        "src": [
            "https://dynamic.indigoimages.ca/books/1480560103.jpg?scaleup=true&width=614&maxheight=614&quality=85&lang=en",
           "data:image/jpeg;base64,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",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxH1CHRyBtXJ7CAl3T9-Od4O30lioF0GIzKw&usqp=CAU",
            //"https://www.upsieutoc.com/images/2020/06/27/img4.jpg"
          ],
        "description": "Europe, Japan and the USA (the Triad) may still dominate research and development (R&D) but they are increasingly being challenged by the emerging economies and above all by China. This is just one of the findings of the UNESCO Science Report 2010 launched in Paris on 10 November 2010.",
        "price": "Rs.500",
        //"colors":["red","black","crimson","teal"],
        "count": 1

        
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default App;
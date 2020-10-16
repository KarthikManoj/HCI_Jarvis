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
            "http://www.unesco.org/new/typo3temp/pics/0f2633c3c7.jpg",
           "https://image.slidesharecdn.com/unesco-101111075643-phpapp01/95/unesco-science-report-14-638.jpg?cb=1422630132",
            //"https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
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

import React, { Component } from 'react';
import './App.css';



function storageAvailable(type) {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}

class App extends Component {
  constructor() {
    super();
    this.state = {
        recipes: {
            recipe1: {
                edit: false,
                title: 'Do you have a physical store?',
                items: ["No,We dont"],
                hidden: true
            },
            recipe2: {
                edit: false,
                title: 'Are the materials brandnew?',
                items: ["Yes"],
                hidden: true
            },
            recipe3: {
                edit: false,
                title: 'Do you have any delivery charges?',
                items: ["Yes,it depends on the items you purchase"],
                hidden: true
            },
            recipe4: {
                edit: false,
                title: 'How long will it take to deliver?',
                items: ["It will take maximum 2 days to deliver"],
                hidden: true
            }
        }
    }
    
  }

  // Create recipe!
  addRecipe = (recipe) =>  {
    const recipes = {...this.state.recipes};
    const last = Date.now()
    recipes[`recipe${last}`] = recipe; 
    this.setState({recipes});
  }

  createRecipe = (event) => {
    event.preventDefault();
    let items = this.textarea.value.trim().split(',');

    const recipe = {
      title: this.title.value,
      items
    }
    
    this.addRecipe(recipe);
  }

  // Delete Recipe!
  deleteRecipe = (recipe) => {
    const recipes = {...this.state.recipes};
    delete recipes[recipe];
    this.setState({recipes});
  }

  // Edit Recipe!
  editRecipe = (event, key) => {
    event.preventDefault();
    const recipes = {...this.state.recipes}
    recipes[key] = {
      title: this.editTitle.value,
      items: this.editTextarea.value.split(',')
    }



    this.setState({recipes})

  }

  editToggle = (key) => {
    let recipes = {...this.state.recipes}
    recipes[key].edit = !recipes[key].edit
    
    this.setState({recipes});
  }

  toggleItems = (key) => {
    let recipes = {...this.state.recipes}

    recipes[key].hidden = !recipes[key].hidden
    this.setState({recipes})
  }

  componentWillUpdate(nextProps, nextState) {
    if(storageAvailable('localStorage')) {
      const ref = localStorage.setItem('recipes', JSON.stringify(nextState.recipes))
      
    } else {
      console.error('Your browser doesn\'t support local storage');
    }
  }

  componentWillMount() {
    if(storageAvailable('localStorage')) {
        const localRef = localStorage.getItem('recipes', JSON.stringify(this.state.recipes))
        if(localRef) {
          this.setState({
            recipes: JSON.parse(localRef)
          })
        }
        
    } else {
      console.error('Your browser doesn\'t support local storage');
    }
    
  }

  
  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["name"]){
       formIsValid = false;
       errors["name"] = "Cannot be empty";
    }

    if(typeof fields["name"] !== "undefined"){
       if(!fields["name"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["name"] = "Only letters";
       }        
    }

    //Email
    if(!fields["email"]){
       formIsValid = false;
       errors["email"] = "Cannot be empty";
    }

    if(typeof fields["email"] !== "undefined"){
       let lastAtPos = fields["email"].lastIndexOf('@');
       let lastDotPos = fields["email"].lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
   }  

   this.setState({errors: errors});
   return formIsValid;
}

contactSubmit(e){
    e.preventDefault();

    if(this.handleValidation()){
       alert("Form submitted");
    }else{
       alert("Form has errors.")
    }

}

handleChange(field, e){         
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
}
  render() {
    let recipes = {...this.state.recipes};
 
    return (
      <div className="app__container">
        <div className="page-header">
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
        </div>
      {
        Object.keys(recipes).map((recipe, index) => {
          return (
            <div className="well">
              <h2 onClick={() => this.toggleItems(recipe)} key={recipe}>
                  {recipes[recipe].title}</h2>
                  {
                    recipes[recipe].hidden ? 
                    <ul>
                      {
                        
                        recipes[recipe].items.map((item, index) => {
                          return <li className="list-group-item" key={index}>{item}</li>
                        })
                      }
                    </ul> : ""
                  }
              <button className="btn btn-danger" onClick={() => this.deleteRecipe(recipe)} ><span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Delete</button>
              <button className="btn btn-default" onClick={() => this.editToggle(recipe)}>Edit <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></button>
              {
                recipes[recipe].edit ?
              <form className="input-group" ref={(input) => this.editForm = input } onSubmit={(e) => this.editRecipe(e, recipe)}>
                <div>
                  <label>: </label>
                  <br />
                  <input className="form-control" defaultValue={recipes[recipe].title} ref={(input) => this.editTitle = input }/>
                </div>
                <div>
                  <label></label>
                  <br />
                <textarea className="form-control" defaultValue={recipes[recipe].items.join(',')} ref={(input) => this.editTextarea = input}></textarea>
                </div>
                <button className="btn btn-primary" type="submit" value="Submit"> Submit <span className="glyphicon glyphicon-ok" aria-hidden="true"></span></button>
            </form> :
              null

              } 
            </div>
            )
          }
        )
      }
      
      </div>
      
    );
  }
}

export default App;
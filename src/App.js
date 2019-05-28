import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import CardSection from './containers/CardSection';
import StorageService from './utils/localStorageService';

const _instanceStorage = new StorageService(); //Instancia del storageService.
class App extends Component{
  constructor(){
    super();

    this.state = {
      title: "",
      img: "",
      data: [],
    }

    //this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
    //this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount(){
    if (_instanceStorage.getItem("memes")){
      this.setState({
        data : JSON.parse(_instanceStorage.getItem("memes"))
      })

    }
    /*
    -- ACA LO HICE DE OTRA MANERA PORQUE QUERIA VER SI FUNCIONABA (SI FUNCIONA)--
    this.setState({
      data : _instanceStorage.getItem("memes")? JSON.parse(_instanceStorage.getItem("memes")):[]
    })*/

  }

  handleOnChangeInput=(event)=>{
    this.setState({
      [event.target.name]: event.target.value      
    })
  }

  handleOnClick=()=>{
    const {data, title,img} = this.state;
    
    const addData  = [...data, {
      title,
      img
    }] ;

    this.setState({
      data: addData
    })

    _instanceStorage.setItem("memes",addData)
  }

  render(){
    return(
      <div className="wrapper">
        <div className="container-header">
          <Header title="MemeApp"/>
          <nav className="nav-app">
            <input type="text" onChange={this.handleOnChangeInput} placeholder="Ingrese un title" name="title" value={this.state.title}/>
            <input type="text" onChange={this.handleOnChangeInput} placeholder="Ingrese una url" name="img" value={this.state.img}/>
            <button onClick={this.handleOnClick}> Agregar </button>
          </nav>
        </div>

        <CardSection data={ this.state.data }/>
      </div>
    )
  }
}

export default App;

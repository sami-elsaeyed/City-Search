import {Component} from "react";

import CityZip from './CityZip'
class CitySearch extends Component{
    constructor(props){
            super(props)
            this.state={
                city:"",
                zip:[]
            }
    }
    search=(event)=>{
        let ext=event.target.value
        this.setState({city:ext.toUpperCase()})
        let link="http://ctp-zip-api.herokuapp.com/city/"+this.state.city
        fetch(link)
        .then((response)=>response.json())
       .then((response) => {
        this.setState({zip:response})
        console.log(this.state.zip)
     })
     .catch((error) => console.error("No result"));
      
    }
    toggleDisplay=()=>{
        this.setState({display:true})
    }
    render(){
            return <div>
                <div style={{backgroundColor:"black", color:"white", height:250}}><h1 style={{paddingTop:100}}>City Search</h1></div>
                <br/>
                <br/>
                <label for="search">City Search</label>
                <input type="text" name="search" onChange={this.search}/>
                <br/>
                <br/>
            <CityZip city={this.state.city}zip={this.state.zip}/>
    
            </div>
        }
    }
export default CitySearch
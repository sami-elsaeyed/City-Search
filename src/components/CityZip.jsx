import {  Component} from "react";

class CityZip extends Component{
    render(){
        return <div>
            <h3>{this.props.city}</h3>
        {this.props.zip.map((code)=>(<div>
            <p>{code}</p>
            </div>
        ))}
        </div>
    }

}
export default CityZip
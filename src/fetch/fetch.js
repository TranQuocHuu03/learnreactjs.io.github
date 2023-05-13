import React,{Component} from "react";

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            isLoaded: false,
        }
    }
    componentDidMount(){
        fetch ('https://61bc131bd8542f0017824588.mockapi.io/a/arrayproducts')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                isLoaded:true,
                items: json,
            })
        })
    }
}
export default App();
import React, { useEffect, useState } from "react";
  
function Counter(props){
    const [count, setCount] = useState(props.count)

    useEffect(() => {
        setCount(parseInt(localStorage.getItem("count")));

        return () => {
            console.log("Não tem mais contador")
        }
    }, [])

    useEffect(() => {
        document.title = count
        localStorage.setItem("count", count);
    }, [count])
    
    function add(){
        setCount(count + 1)
    }
     
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add}>Add</button>
        </div>
    )
}
/*
class Counter extends React.Component{

  constructor(props){ //primeiro método de um ciclo de vida de um componente
        super(props);

        this.state = {count: 1}
        this.add = this.add.bind(this)
    }

    
    add(){
    //    this.setState({count: this.state.count + 1})
        this.setState((state) => {return{count: state.count + 1}})
    }

    shouldComponentUpdate(){
        return true;
    }

    componentDidMount(){// será executado depois que um componente for mostrado na tela

    }
    componentWillUnmount(){// esse método sempre será utilizado quando um componente for removido da tela

    }

    render(){  //vai ser executado sempre que tiver uma alteração no compodente alteração de estadop ou de propriedade
        return(<div>
            <h1>Counter: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>    
        </div>)
    }
}
*/
export default Counter

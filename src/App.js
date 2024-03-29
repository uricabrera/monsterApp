import React,{Component} from "react";
import {CardList} from "./components/card-list/card-list.component";
import './App.css';
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component{
    constructor(){
        super();
        this.state = {
            monsters: [],
            searchField: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json()
            })
            .then((users) => {
                this.setState({monsters: users})
            })
    }

    render(){
        const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return(
            <div className="App">
                <h1>Monsters App</h1>
                <SearchBox handleChange={e => this.setState({ searchField: e.target.value })}/>
                <CardList monsters={filteredMonsters}/>
            </div>
            )
    }
}

export default App;

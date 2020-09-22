import React from 'react'
import './index.css'
import { getData } from '../Datasource/data.js'
import Usercard from '../RenderCards/Usercard.js'

export default class SearchBox extends React.Component {

    constructor(props) {
        super(props)
        this.state = { userList: null }
    }

    serachText = (event) => {
        var text = event.target.value;
        console.log(text)
        setTimeout(() => {
            getData(text).then((data) => { })
        }, 1000)

    }

    render() {
        const { userList } = this.state
        return (<div><input id="search_text" onChange={this.serachText}></input>
            <Usercard userList={userList}></Usercard>
        </div>)
    }
}
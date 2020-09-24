import React from 'react'
import './index.css'
import { getData, getDataByUserDetails } from '../Datasource/data.js'
import UserCardContainer from '../RenderCards/UserCardContainer.js'

export default class SearchBox extends React.Component {

    constructor(props) {
        super(props)
        this.state = { userList: null, usersListOnSearched: null }
    }
    componentDidMount() {
        getData().then((data) => { this.setState({ userList: data }) })
    }

    serachText = (event) => {
        var text = event.target.value;
        console.log(text)
        // TODO : thrttling
        // TODO : get data once only
        var usersListOnSearched = getDataByUserDetails(this.state.userList, text)
        this.setState({ usersListOnSearched: usersListOnSearched })
    }

    render() {
        const { usersListOnSearched } = this.state
        return (<div class="container">
            <input id="search_text" onChange={this.serachText}></input>
            <UserCardContainer userList={usersListOnSearched}></UserCardContainer>
        </div>)
    }
}
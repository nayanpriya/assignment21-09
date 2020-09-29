import React from 'react'
import './index.css'
import { getData, getDataByUserDetails } from '../Datasource/data.js'
import UserCardContainer from '../RenderCards/UserCardContainer.js'
let displayBoxIndex = -1
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
    searchBoxKeyboard = (e) => {
        console.log('key')
        console.log(e)
        if (e.keyCode === 40) {
            console.log('here')
            this.Navigate(1);
        }
        if (e.keyCode === 38) {
            this.Navigate(-1);
        }

    }

    Navigate = (diff) => {
        console.log(diff)
        displayBoxIndex += diff;
        console.log(displayBoxIndex)
        var oBoxCollection = document.getElementsByClassName("user_details")
        if (displayBoxIndex >= oBoxCollection.length)
            displayBoxIndex = 0;
        if (displayBoxIndex < 0)
            displayBoxIndex = oBoxCollection.length - 1;
        var cssClass = "display_box_hover";
        // oBoxCollection.removeClass(cssClass).eq(displayBoxIndex).addClass(cssClass);
    }


    render() {
        const { usersListOnSearched } = this.state
        return (<div class="container">
            <input id="search_text" onChange={this.serachText} onKeyUp={this.searchBoxKeyboard}></input>
            <UserCardContainer userList={usersListOnSearched}></UserCardContainer>

        </div>)
    }
}
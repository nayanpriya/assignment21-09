import React from 'react'
import UserCard from './Usercard'
import './index.css'

export default class UsercardContainer extends React.Component {



    render() {
        const { userList } = this.props
        return (<div className="user_details_container">
            <UserCard userList={userList}></UserCard>
        </div>)
    }

}
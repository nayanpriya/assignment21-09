import React from 'react'
import './index.css'

export default class Usercard extends React.Component {



    render() {
        const { userList } = this.props
        console.log(userList)
        return (<div class="user_details">
            {userList && userList.map(user => {
                return (<div key={user.id}>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.id}</p>
                </div>)

            })}

        </div>)
    }

}
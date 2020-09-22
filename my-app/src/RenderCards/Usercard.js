import React from 'react'
import './index.css'

export default class Usercard extends React.Component {



    render() {
        const { userList } = this.props
        return (<div className="user_details">
            {userList && userList.map(user => {
                return (<ul>
                    <li>Nayan</li>
                    <li>Nayan</li>
                    <li>Nayan</li>
                </ul>)

            })}

        </div>)
    }

}
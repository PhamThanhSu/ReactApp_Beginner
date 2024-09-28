import React, { useState } from 'react';
import './Displayinfor.scss';
import logo from './../logo.svg';

// class Displayinfor extends React.Component {

//     state = {
//         isShowListUsers: true
//     }

//     HandleShowhide = () => {
//         this.setState({
//             isShowListUsers: !this.state.isShowListUsers
//         })
//     }

//     render() {
//         const { listUsers } = this.props
//         //props => viết tắt properties
//         return (
//             <div className='display-infor-container'>
//                 <div>
//                     <span onClick={() => { this.HandleShowhide() }}>
//                         {this.state.isShowListUsers === true ? "Hide list users:" : "Show list users:"}
//                     </span>
//                 </div>
//                 {this.state.isShowListUsers &&
//                     <div>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         <div>My name's {user.name}</div>
//                                         <div>My age's {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.HandleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

const Displayinfor = (props) => {
    const { listUsers } = props;
    const [isShowListUser, setShowHideListUser] = useState(true);
    const HandleShowhide = () => {
        setShowHideListUser(!isShowListUser);
    }
    return (
        <div className='display-infor-container'>
            <div>
                <span onClick={() => { HandleShowhide() }}>
                    {isShowListUser === true ? "Hide list users:" : "Show list users:"}
                </span>
            </div>
            {isShowListUser &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.HandleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}


export default Displayinfor;
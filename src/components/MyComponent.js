import React, { useState } from 'react';
import AddUserinfor from './AddUserinfor';
import Displayinfor from './Displayinfor';

// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, name: "Lils", age: "18" },
//             { id: 2, name: "Thanh Su", age: "20" },
//             { id: 3, name: "Eric", age: "22" }
//         ]
//     }

//     HandleAddNewUser = (userObj) => {
//         console.log(userObj)
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }

//     HandleDeleteUser = (userId) => {
//         let listUsersClone = [...this.state.listUsers];
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }

//     //JSX
//     render() {
//         return (
//             <>
//                 <div className='a'>
//                     <AddUserinfor
//                         HandleAddNewUser={this.HandleAddNewUser}
//                     /> 
//                     <br /> <br />
//                     <Displayinfor
//                         listUsers={this.state.listUsers}
//                         HandleDeleteUser={this.HandleDeleteUser}
//                     />
//                 </div>
//                 <div className='b'></div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {

    const [listUsers, setListUsers] = useState([
        { id: 1, name: "Lils", age: "18" },
        { id: 2, name: "Thanh Su", age: "20" },
        { id: 3, name: "Eric", age: "22" }
    ]);

    const HandleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);

    }

    const HandleDeleteUser = (userId) => {
        const listUsersClone = listUsers.filter(item => item.id !== userId);
        setListUsers(listUsersClone);
    }

    //JSX
    return (
        <>
            <div className='a'>
                <AddUserinfor
                    HandleAddNewUser={HandleAddNewUser}
                />
                <br /> <br />
                <Displayinfor
                    listUsers={listUsers}
                    HandleDeleteUser={HandleDeleteUser}
                />
            </div>
            <div className='b'></div>
        </>
    );
}

export default MyComponent;
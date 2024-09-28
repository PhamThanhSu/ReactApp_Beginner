import React, { useState } from 'react';

// class AddUserinfor extends React.Component {
//     state = {
//         name: '',
//         address: 'Dong Nai',
//         age: ''
//     };

//     HandleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     HandleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     HandleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.HandleAddNewUser({
//             id: Math.floor((Math.random() * 100 ) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render() {
//         return (
//             <div>
//                 my name is {this.state.name} and I'm {this.state.age}
//                 <form onSubmit={(event) => this.HandleOnSubmit(event)}>
//                     <label>Your name: </label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => this.HandleOnChangeInput(event)}
//                     />
//                     <label>Your age: </label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => this.HandleOnChangeAge(event)}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserinfor = (props) => {

    const [User, setUser] = useState(
        {
            name: '',
            address: 'Dong Nai',
            age: ''
        }
    );

    const HandleOnChangeInput = (event) => {
        setUser({
            ...User,
            name: event.target.value
        });
    }

    const HandleOnChangeAge = (event) => {
        setUser({
            ...User,
            age: event.target.value
        });
    }

    const HandleOnSubmit = (event) => {
        event.preventDefault();
        props.HandleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: User.name,
            age: User.age
        });
        setUser({ ...User, name: '', age: '' }); // Reset form sau khi submit
    }

    return (
        <div>
            my name is {User.name} and I'm {User.age}
            <form onSubmit={(event) => HandleOnSubmit(event)}>
                <label>Your name: </label>
                <input
                    value={User.name}
                    type="text"
                    onChange={(event) => HandleOnChangeInput(event)}
                />
                <label>Your age: </label>
                <input
                    value={User.age}
                    type="text"
                    onChange={(event) => HandleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserinfor;
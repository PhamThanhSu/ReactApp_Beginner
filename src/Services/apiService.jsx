import axios from "../ultils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
    //submit data
    //call apis
    //let data = {
    // email: email,
    //password: password,
    //username: username,
    //role: role,
    //userImage: image
    // }
    //console.log(data);
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data);   
}

const putUpdateUser = (id, username, role, image) => {
    // Tạo đối tượng FormData để gửi dữ liệu
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    if (image) { // Kiểm tra nếu có image mới thì thêm vào
        data.append('userImage', image);
    }

    // Gửi yêu cầu cập nhật người dùng
    return axios.put(`api/v1/participant`, data);   
}


const getAllUsers = () => {
    return axios.get('api/v1/participant/all');
}

const deleteUsers = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } });
}

export { postCreateNewUser , getAllUsers, putUpdateUser, deleteUsers}
import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FiUserPlus } from "react-icons/fi";
import TableUsers from "./TableUsers";
import ModalUpdateUser from "./ModalUpdateUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../Services/apiService";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [listUsers, setListUsers] = useState([]); // State để refresh bảng
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataView, setDataView] = useState({});
    const [dataDelete, setDataDelete] = useState({});

    useEffect(() => {
        fetchListUsers();
        console.log('list user', listUsers);
    }, []); // Gọi lại khi refresh thay đổi

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res && res.EC === 0) {
            setListUsers(res.DT);
        }
    }
    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
        console.log('user', dataUpdate)
    };

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataView(user);
    };

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
    };

    const resetUpdateData = () => {
        setDataUpdate({});
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                ManageUser
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}>
                        <FiUserPlus /> Add new users
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUsers handleClickBtnUpdate={handleClickBtnUpdate} handleClickBtnView={handleClickBtnView} handleClickBtnDelete={handleClickBtnDelete} listUsers={listUsers} />
                </div>
                <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} fetchListUsers={fetchListUsers} />
                <ModalUpdateUser show={showModalUpdateUser} setShow={setShowModalUpdateUser} fetchListUsers={fetchListUsers} dataUpdate={dataUpdate} resetUpdateData={resetUpdateData} />
                <ModalViewUser show={showModalViewUser} setShow={setShowModalViewUser} dataView={dataView} resetUpdateData={resetUpdateData} />
                <ModalDeleteUser show={showModalDeleteUser} setShow={setShowModalDeleteUser} dataDelete={dataDelete} resetUpdateData={resetUpdateData} fetchListUsers={fetchListUsers} />
            </div>
        </div>
    );
}

export default ManageUser;

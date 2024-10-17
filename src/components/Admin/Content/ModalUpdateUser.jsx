import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiUpload } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import { putUpdateUser } from '../../../Services/apiService';
import _, { update } from 'lodash';

const ModalUpdateUser = (props) => {
    const { show, setShow, dataUpdate } = props;

    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
        setImage("");
        setPreviewImage("");
        props.resetUpdateData();
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        if(!_.isEmpty(dataUpdate)){
            //update state
            setEmail(dataUpdate.email);
            setUsername(dataUpdate.username);
            setRole(dataUpdate.role);
            setImage(dataUpdate.image);
            setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
        }
    }, [dataUpdate]);

    const handleUploadImage = (event) => {
        if(event.target && event.target.files && event.target.files[0]){
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
    }

    const handleSubmitUpdateUser = async() => {
        try {
            // Gọi hàm postCreateNewUser để tạo user mới
            console.log('username', username)
            let data = await putUpdateUser(dataUpdate.id, username, role, image);
            console.log('data', data)
            if (data && data.EC === 0) {
                toast.success('Cập nhật User thành công');
                handleClose(); // Giả sử đây là hàm để đóng modal hoặc reset form
                await props.fetchListUsers(); //Load lại bảng khi cập nhật thành công user
            } else if (data && data.EC !== 0) {
                toast.error('Email đã tồn tại');
            }
        } catch (error) {
            // Xử lý khi có lỗi từ API
            console.error(error);
            toast.error('Có lỗi xảy ra, vui lòng thử lại');
        }
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} size="lg" backdrop="static"  className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)}/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)}/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username} onChange={(event) => setUsername(event.target.value)}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" value={role} onChange={(event) => setRole(event.target.value)}>
                                <option value="USER">USER</option>
                                <option value="ADMIN" >ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label label-upload" htmlFor='labelUpload'>
                                <FiUpload />Upload File Image
                            </label>
                            <input type="file" id="labelUpload" hidden onChange={(event) => handleUploadImage(event)}/>
                        </div>
                        <div className="col-md-12 img-preview" >
                            {previewImage ? 
                                <img src={previewImage} /> 
                                : 
                                <span>Preview Image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitUpdateUser}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser;
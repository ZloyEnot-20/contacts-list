import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Modal.css';
import { IoHome } from 'react-icons/io5';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../actions';
import { defaultAvatar } from '../../data';

function ModalWindow({ setIsEdit, setData, setShow, userInfo, show }) {
  const dispatch = useDispatch();
  const deleteContact = (id) => {
    dispatch(
      deleteUser({
        id: id,
      })
    );

    setShow();
  };

  const handleData = () => {
    setIsEdit(true);
    setData(prev=> prev = userInfo);
  };

  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="image">
          <img
            src={userInfo?.avatar ? userInfo?.avatar : defaultAvatar}
            alt=""
            className="img-fluid"
          />
          <h5>{userInfo?.name}</h5>
        </div>

        <hr />
        <div className="modal-info">
          <HiOutlineMail /> <h5>{userInfo?.email}</h5>
        </div>
        <div className="modal-info">
          <HiPhone /> <h5>{userInfo?.phone}</h5>
        </div>
        <div className="modal-info">
          <IoHome /> <h5>{userInfo?.location}</h5>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={setShow}>Close</Button>
        <Button variant="warning" onClick={handleData}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => deleteContact(userInfo.id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalWindow;

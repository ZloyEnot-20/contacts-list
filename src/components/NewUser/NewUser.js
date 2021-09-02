import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './NewUser.css';
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions';

const NewUser = (props) => {
  const dispatch = useDispatch();
  const [avatar, setAvatar] = React.useState('');
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [nationality, setNationality] = React.useState('');

  const createUser = () => {
    const id = Math.round(Math.random() * 1000);
    dispatch(
      addUser({
        id,
        avatar,
        name: name + ' ' + surname,
        email,
        phone,
        birthday,
        location: country,
        nationality,
      })
    );
    setAvatar('');
    props.setSignUp((prev) => !prev);
  };

  const handleClose = () => {
    props.setSignUp((prev) => !prev);
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label>Photo</label>
            <input
              onChange={(event) => setAvatar(event.target.value)}
              type="text"
              className="form-control"
              placeholder="Paste the link to photo or skip if you dont have"
            />
          </div>
          <div className="form-group">
            <label>First name</label>
            <input
              onChange={(event) => setName(event.target.value)}
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              onChange={(event) => setSurname(event.target.value)}
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Birthday</label>
            <input
              onChange={(event) => setBirthday(event.target.value)}
              type="date"
              className="form-control"
              placeholder="Birthday"
            />
          </div>
          <div className="form-group">
            <label>Phone number</label>
            <input
              onChange={(event) => setPhone(event.target.value)}
              type="text"
              className="form-control"
              placeholder="Phone number"
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input
              onChange={(event) => setCountry(event.target.value)}
              type="text"
              required="required"
              className="form-control"
              placeholder="Country"
            />
          </div>
          <div className="form-group">
            <label>Nationality</label>
            <input
              onChange={(event) => setNationality(event.target.value)}
              type="text"
              className="form-control"
              placeholder="Nationality"
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        <Button variant="success" onClick={createUser}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default NewUser;

import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Edit.css';
import { useDispatch } from 'react-redux';
import { editUser } from '../../actions';

const Edit = ({ data, setIsEdit, show ,setShow}) => {
  const dispatch = useDispatch();
  const [avatar, setAvatar] = React.useState(data.avatar);
  const [name, setName] = React.useState(data.name);
  // const [surname, setSurname] = React.useState({data.surname});
  const [email, setEmail] = React.useState(data.email);
  const [phone, setPhone] = React.useState(data.phone);
  const [birthday, setBirthday] = React.useState(data.birthday);
  const [country, setCountry] = React.useState(data.location);
  const [nationality, setNationality] = React.useState(data.nationality);

  React.useEffect(() => {
    console.log(name, phone);
  });

  const createUser = () => {
    dispatch(
      editUser({
        id: data.id,
        avatar,
        name: name,
        email,
        phone,
        birthday,
        location: country,
        nationality,
      })
    );
    setIsEdit(false);
    setShow(false)
  };

  const handleClose = () => {
    setIsEdit((prev) => !prev);
    console.log(name, data.name);
  };
  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <h1>edit</h1>
          <div className="form-group">
            <label>Photo</label>
            <input
              onChange={(event) => setAvatar(event.target.value)}
              type="text"
              value={avatar}
              className="form-control"
              placeholder="Paste the link to photo or skip if you dont have"
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              onChange={(event) => setName(event.target.value)}
              type="text"
              value={name}
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              value={email}
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Birthday</label>
            <input
              onChange={(event) => setBirthday(event.target.value)}
              type="date"
              value={birthday}
              className="form-control"
              placeholder="Birthday"
            />
          </div>
          <div className="form-group">
            <label>Phone number</label>
            <input
              onChange={(event) => setPhone(event.target.value)}
              type="text"
              value={phone}
              className="form-control"
              placeholder="Phone number"
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input
              onChange={(event) => setCountry(event.target.value)}
              type="text"
              value={country}
              className="form-control"
              placeholder="Country"
            />
          </div>
          <div className="form-group">
            <label>Nationality</label>
            <input
              onChange={(event) => setNationality(event.target.value)}
              type="text"
              value={nationality}
              className="form-control"
              placeholder="Nationality"
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        <Button variant="success" onClick={createUser}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Edit;

import './App.css';
import React from 'react';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import ModalWindow from './components/Modal/ModalWindow';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewUser from './components/NewUser/NewUser';
import Edit from './components/Edit/Edit';

function App() {
  const [userInfo, setUserInfo] = React.useState({});
  const [signUp, setSignUp] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [data, setData] = React.useState({});
  const [show, setShow] = React.useState(false);
  const onShow = (item) => {
    setShow((prev) => !prev);
    setUserInfo(item);
  };
  
  return (
    <div className="App">
      <Header />
      <Search setSignUp={setSignUp} />
      <Contacts onShow={onShow} />
      <ModalWindow
        show={show}
        setShow={onShow}
        userInfo={userInfo}
        setIsEdit={setIsEdit}
        setData={setData}
      />
      <NewUser show={signUp} setSignUp={setSignUp} />
      {isEdit && (
        <Edit
          show={isEdit}
          setIsEdit={setIsEdit}
          data={data}
          setShow={setShow}
        />
      )}
    </div>
  );
}

export default App;

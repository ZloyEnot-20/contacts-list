import React from 'react';
import './Contacts.css';
import { FaClipboard } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import {defaultAvatar} from '../../data'


const Contacts = ({ onShow }) => {
 
  const users = useSelector((state) => state);
  return (
    <div className="contacts">
      <div className="contacts-content">
        <div className="contacts__tabs">
          <span className="avatars">Avatar</span>
          <span className="full_name">Full name</span>
          <span className="birthday">Birthday</span>
          <span className="email">Email</span>
          <span className="phones">Phone</span>
          <span className="location">Location</span>
          <span className="nationality">Nationality</span>
        </div>
        <div className="contacts__list">
            
          {users && users.map((item, index) => {
            return (
              <div
                className="item"
                onClick={() => onShow(item)}
                key={index + item.id}
              >
                <div className="item__info avatar">
                  <img src={item.avatar ? item.avatar : defaultAvatar} alt="" />
                </div>
                <div className="item__info">{item.name}</div>
                <div className="item__info">{item.birthday}</div>
                <div className="item__email  ">
                  <FaClipboard size="14px" />
                  {item.email}
                </div>
                <div className="item__info phone">{item.phone}</div>
                <div className="item__info">{item.location}</div>
                <div className="item__nationality item__info">
                  {item.nationality}
                </div>
              </div>
            );
          }) }
        </div>
      </div>
    </div>
  );
};

export default Contacts;

import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ name, email, role }) => {
  return (
    <div className="user-card">
     <center><h2>{name}</h2></center> 
     <center> <p>Email: {email}</p></center>
     <center> <p>Role: {role}</p></center>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string,
};

UserCard.defaultProps = {
  role: 'User',
};

export default UserCard;
import React from 'react';
import '../Styles/PopUpstyles.css';
import PropTypes from 'prop-types';

function UserInfoModal(props) {
  const { info, trigger, setTrigger } = props;
  return (trigger) && (
    <div>
      <div className="popup">
        <div className="overlay" />
        <div className="content">
          <div id="info">Users Information</div>
          <div>
            Full Name :
            {info.name}
          </div>
          <div>
            Email :
            {info.email}
          </div>
          <div>
            city :
            {info.address.city}
          </div>
          <div>
            zip code :
            {info.address.zipcode}
          </div>
          <div>
            Phone no. :
            {info.phone}
          </div>
          <div>
            website :
            {info.website}
          </div>
          <div>
            Company name  :
            {info.company.name}
          </div>
          <button type="button" className="close-btn" onClick={() => setTrigger(false)}>×</button>
        </div>
      </div>

    </div>
  );
}

UserInfoModal.propTypes = {
  trigger: PropTypes.bool.isRequired,
  info: PropTypes.arrayOf.isRequired,
  setTrigger: PropTypes.func.isRequired,
};

UserInfoModal.defaultProps = {

};

export default UserInfoModal;

import React from 'react';
import '../Styles/PopUpstyles.css';
import PropTypes from 'prop-types';

function UserInfoModal(props) {
  const { trigger, info } = props;
  return (trigger) && (
    // eslint-disable-next-line react/no-unknown-property
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
          <button type="button" className="close-btn" onClick={() => trigger(false)}>×</button>
        </div>
      </div>

    </div>
  );
}

UserInfoModal.propTypes = {
  trigger: PropTypes.bool.isRequired,
  info: PropTypes.arrayOf.isRequired,
  // setTrigger: PropTypes.bool
};

UserInfoModal.defaultProps = {

};

export default UserInfoModal;

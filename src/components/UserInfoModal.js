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
          <div className="infoHeading">User&apos;s Information</div>
          <table className="infoTable">
            <tbody>
              <tr>
                <td>Full Name :</td>
                <td>{info.name}</td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>{info.email}</td>
              </tr>
              <tr>
                <td>city :</td>
                <td>{info.address.city}</td>
              </tr>
              <tr>
                <td>zip code :</td>
                <td>{info.address.zipcode}</td>
              </tr>
              <tr>
                <td>Phone no. :</td>
                <td>{info.phone}</td>
              </tr>
              <tr>
                <td>website :</td>
                <td>{info.website}</td>
              </tr>
              <tr>
                <td>Company name  :</td>
                <td>{info.company.name}</td>
              </tr>
            </tbody>
          </table>
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

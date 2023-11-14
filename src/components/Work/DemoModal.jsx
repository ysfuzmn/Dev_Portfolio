import React from 'react';
import PropTypes from 'prop-types';
import './DemoModal.css';

const DemoModal = ({ isOpen, onClose, item }) => {
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
  };

  const modalClass = isOpen ? 'demo_modal show' : 'demo_modal';

  return (
    <div>
      {isOpen && (
        <div className="modal_backdrop">
          <div className={modalClass} style={modalStyle}>
            <span className="close_button" onClick={onClose}>&times;</span>
            <img src={item.image} alt={item.title} className='work_modalimg'/>
            <h3 className='work_title'>{item.title}</h3>
            <p className='work_subtitle'>{item.subtitle}</p>
            <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="work_button">
              GitHub <i className="bx bx-right-arrow-alt work_button_icon"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

DemoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default DemoModal;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DemoModal from './DemoModal';

export const WorksItem = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="work_card" key={item.id}>
      <img src={item.image} alt={item.title} className='work_img'/>
      <h3 className='work_title'>{item.title}</h3>
      <button className="work_button" onClick={openModal}>
        Extend <i className="bx bx-right-arrow-alt work_button_icon"></i>
      </button>

      {modalOpen && (
        <DemoModal
          isOpen={modalOpen}
          onClose={closeModal}
          item={item}
        />
      )}
    </div>
  );
};

WorksItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  
  }).isRequired,
};

export default WorksItem;

import * as modalTypes from './modalTypes';

const modalReduser = (state = false, { type }) => {
  switch (type) {
    case modalTypes.SHOW_MODAL:
      return true;

    case modalTypes.CLOSE_MODAL:
      return false;

    default:
      return state;
  }
};

export default modalReduser;

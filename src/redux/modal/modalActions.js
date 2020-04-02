import * as modalTypes from './modalTypes';

export const showModal = () => ({ type: modalTypes.SHOW_MODAL });

export const closeModal = () => ({ type: modalTypes.CLOSE_MODAL });

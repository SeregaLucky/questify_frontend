import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import CompletedModal from '../CompletedModal/CompletedModal';
import tasksOperations from '../../redux/tasks/tasksOperations';
import tasksSelectors from '../../redux/tasks/tasksSelectors';
import { connect } from 'react-redux';

class Card extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {this.setState({ isModalOpen: true })};

  closeModal = () => this.setState({ isModalOpen: false });

  handleCloseQuest = () => {
    this.props.updateQuest({ done: true });
    this.setState({ isModalOpen: false });
  };


  render() {
    const { isModalOpen } = this.state;

    return (
        <div>
          {!this.props.isDone && (<button type="button" onClick={this.openModal}>
            done
          </button>)}
          {isModalOpen && (
            <CompletedModal
              onCloseModal={this.closeModal}
              onCloseQuest={this.handleCloseQuest}
              taskName={this.props.name}
            />
          )}
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateQuest: (data) => dispatch(tasksOperations.updateQuest(ownProps.id, data)),
  };
};

export default connect(null, mapDispatchToProps)(Card);

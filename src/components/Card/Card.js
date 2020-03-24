import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import CompletedModal from '../CompletedModal/CompletedModal';
import tasksOperations from '../../redux/tasks/tasksOperations';
import tasksSelectors from '../../redux/tasks/tasksSelectors';
import { connect } from 'react-redux';

class Card extends Component {
  state = {
    isCompletedModalOpen: false,
  };

  openCompletedModal = () => {this.setState({ isCompletedModalOpen: true })};

  closeCompletedModal = () => this.setState({ isCompletedModalOpen: false });

  handleCloseQuest = () => {
    this.props.updateQuest({ done: true });
    this.setState({ isCompletedModalOpen: false });
  };


  render() {
    const { isCompletedModalOpen } = this.state;

    return (
      <>
        <div>
          {!this.props.isDone && (<button type="button" onClick={this.openCompletedModal}>
            done
          </button>)}
        </div>
        {isCompletedModalOpen && (
            <CompletedModal
              onCloseModal={this.closeCompletedModal}
              onCloseQuest={this.handleCloseQuest}
              taskName={this.props.name}/>
        )}
      </>  
    );
          
        
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateQuest: (data) => dispatch(tasksOperations.updateQuest(ownProps.id, data)),
  };
};

export default connect(null, mapDispatchToProps)(Card);

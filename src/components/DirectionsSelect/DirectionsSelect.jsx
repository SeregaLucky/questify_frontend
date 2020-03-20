import React, { Component } from 'react';

import styles from './DirectionsSelect.module.css';

const {
  dropdown,
  btnStuff,
  boxDropDown,
  btnIconDrop,
  btnIconDropDisable,
  liStuff,
} = styles;

class DirectionsSelect extends Component {
  state = {
    list: [
      { label: 'Stuff' },
      { label: 'Family' },
      { label: 'Health' },
      { label: 'Learning' },
      { label: 'Leisure' },
      { label: 'Work' },
    ],
    isOpen: false,
    itemStatus: null,
  };

  componentDidMount() {
    if (this.state.itemStatus !== this.props.value) {
      this.setState({
        itemStatus: 'some one',
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        itemStatus: this.props.value.toUpperCase(),
      });
    }
  }

  toggle = () => this.setState(state => ({ isOpen: !state.isOpen }));

  // пока еще не применил никуда эту функцию
  generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  render() {
    const { isOpen, itemStatus, list } = this.state;
    const { handleDestination } = this.props;

    return (
      <div className={dropdown} onClick={this.toggle}>
        {isOpen ? (
          <div className={boxDropDown}>
            <div type="button" className={btnStuff}>
              {itemStatus} <div className={btnIconDrop}></div>
            </div>
            <ul>
              {list.map((elem, i) => (
                <li
                  className={liStuff}
                  key={i}
                  onClick={() => handleDestination(elem.label)}
                >
                  {elem.label.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <button type="button" className={btnStuff}>
            {itemStatus}
            <div
              className={
                itemStatus !== 'some one' ? btnIconDropDisable : btnIconDrop
              }
            ></div>
          </button>
        )}
      </div>
    );
  }
}

export default DirectionsSelect;

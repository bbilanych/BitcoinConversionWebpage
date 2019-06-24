import React, {Component} from 'react';

export default class Radio extends Component {

  handleClick = () => {
    const {onClick, tab} = this.props;
    onClick(tab)
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={this.props.className} onClick={this.handleClick}>
        <g id="Ellipse_37" data-name="Ellipse 37" fill="none" stroke="#575656" stroke-width="2">
          <circle cx="12" cy="12" r="12" stroke="none"/>
          <circle cx="12" cy="12" r="11" fill="none"/>
        </g>
      </svg>
    );
  }
}




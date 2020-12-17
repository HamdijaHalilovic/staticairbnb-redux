import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 

class Flat extends Component {

  handleClick= () => {
    this.props.selectFlat(this.props.flat);
  }

  render() {

    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

    let classes="card-trip flat";
      if (this.props.flat === this.props.selectedFlat) {
        classes += "flat-selected";
      }

    return (
      <div className={classes}>
        <img style={style} onClick={this.handleClick}/>
        <div className="card-trip-infos">
          <div>
            <h2>{this.props.flat.name}</h2>
            <p>{this.props.flat.price} {this.props.flat.priceCurrency}</p>
          </div>
        </div>
      </div>
    );
  }
}

import { selectFlat } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
  { selectFlat: selectFlat },
  dispatch
  );
 } 

function mapReduxStateToProps(reduxState) {
  return {
    selectedFlat: reduxState.selectedFlat
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps) (Flat);
import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import { setFlats } from '../actions'; 

import Flat from './flat';



class FlatList extends Component {
  componentWillMount() {
    this.props.setFlats();
  }

  render () {
    return (
      <div className="col-sm-7 flat-list">
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name}/>)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
  { setFlats: setFlats },
  dispatch
  );
 } 

function mapReduxStateToProps(reduxState) {
  return {
    flats: reduxState.flats
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps) (FlatList);
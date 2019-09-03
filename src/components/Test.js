import React, { Component } from 'react';
import hoverEffect from 'hover-effect';
import kakko from '../assets/kaapo.jpg';
import {kakkoRangers} from '../assets/kakko-rangers.jpg';
import {ladyLiberty} from '../assets/ladyliberty3.png';
import styled, { css } from 'styled-components';
import {connect} from 'react-redux';
import {fetchKakkoStats} from '../actions/fetchKakkoStatsAction';
import {fetchHughesStats} from '../actions/fetchHughesStatsAction';

const STYLES = styled.div`
  height: 100vh;
  width: 100%;

  .my-div {
    height: 20em;
    width: 30em;
  }
`;

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
    this.myRef = React.createRef();
  }

  componentDidMount = () => {
    this.props.fetchKakkoStats();
    this.props.fetchHughesStats();
  }

  render() {
    const animation = new hoverEffect({
          parent: this.myRef.current,
          intensity: 0.3,
          image1: '..assets/kaapo.jpg',
          image2: '..assets/kakko-rangers.jpg',
          displacementImage: '../assets/ladyliberty3.png'
      });

    console.log('this.props: ' + this.props);

    return (
      <STYLES>
        <div>
          <h1>Test</h1>
          <div ref={this.myRef} className="my-div">
          </div>
        </div>
      </STYLES>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    fetchKakkoStats: () => dispatch(fetchKakkoStats()),
    fetchHughesStats: () => dispatch(fetchHughesStats())
})

const mapStateToProps = state => ({
    kakkoStats: state.fetchKakkoStatsReducer,
    hughesStats: state.fetchHughesStatsReducer
})


export default connect(mapStateToProps, mapDispatchToProps)(Test);

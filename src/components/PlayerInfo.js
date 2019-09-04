import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {connect} from 'react-redux';
import {fetchKakkoInfo} from '../actions/fetchKakkoInfoAction';
import {fetchHughesInfo} from '../actions/fetchHughesInfoAction';
import kaapoShoot from '../assets/kaapo-shoot-cropped.png';
import { Col, Row, Container } from 'react-bootstrap';

const STYLES = styled.div`
  height: 100vh;
  width: 100%;
  color: snow;

  .my-div {
    height: 20em;
    width: 30em;
  }

  .container {
    background: #00428e;
    border: 1px solid lightgray;
    margin-top: 5em;
  }

  .stats-container {
    background: #ba0528;
    clip-path: polygon(0 0, 100% 0, 60% 100%, 0% 100%);
  }
`;

class PlayerInfo extends Component {
  componentDidMount = () => {
    this.props.fetchKakkoInfo();
    this.props.fetchHughesInfo();
  }

  render() {
    const birthCity = this.props.kakkoInfo.birthCity;
    const birthCountry = this.props.kakkoInfo.birthCountry;
    const birthDate = this.props.kakkoInfo.birthDate;
    const height = this.props.kakkoInfo.height;
    const weight = this.props.kakkoInfo.weight;

    return (
      <STYLES>
        <Container>
            <Row>
              <Col xs={{span: 6}} className="stats-container">
                <ul>
                  <li>{birthCity}</li>
                  <li>{birthCountry}</li>
                  <li>{birthDate}</li>
                  <li>{height}</li>
                  <li>{weight}</li>
                </ul>
              </Col>
              <Col xs={{span: 6}}>
                <img src={kaapoShoot} height="500" width="600"/>
              </Col>
            </Row>
        </Container>
      </STYLES>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    fetchKakkoInfo: () => dispatch(fetchKakkoInfo()),
    fetchHughesInfo: () => dispatch(fetchHughesInfo())
})

const mapStateToProps = state => ({
    kakkoInfo: state.fetchKakkoInfoReducer,
    hughesInfo: state.fetchHughesInfoReducer
  })


export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo);

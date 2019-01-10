import React, { Component } from 'react';
import { Container, Header, Content, Item, Input } from 'native-base';
import PropTypes from 'prop-types';
import style from './RoundedTextForm.component.style.js';

export default class RoundedTextForm extends Component {
  render() {
    return (
          <Item rounded>
            <Input style={[style.roundedForm, {color:this.props.textColor}]}
              placeholder={this.props.placeholder}
              placeholderTextColor={this.props.placeholderColor} 
              onChangeText={this.props.onChangeText} 
              value={this.props.value}
              />
          </Item>
    );
  }
}

RoundedTextForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholderColor: PropTypes.string,
  onChangeText : PropTypes.func.isRequired,
  textColor: PropTypes.string,
}
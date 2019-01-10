import React, { Component } from 'react';
import { Item, Input } from 'native-base';
import styles from './UnderlineTextForm.component.style';
import PropTypes from 'prop-types';

export default class UnderlineTextForm extends Component {
  render() {
    return (
          <Item style={styles.underlinedForm}>
            <Input placeholder={this.props.placeholder} secureTextEntry={this.props.secure} />
          </Item>
    );
  }
}

UnderlineTextForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  secure: PropTypes.bool,
}
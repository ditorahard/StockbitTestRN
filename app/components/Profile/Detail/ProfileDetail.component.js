import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import PropTypes from 'prop-types';
import styles from './ProfileDetail.component.style.js';

export default class ProfileDetail extends Component {
  render() {
    return (
        <View style={styles.profile}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              source={this.props.profilePictureFilepath ? {uri: this.props.profilePictureFilepath} : {uri: 'https://lastfm-img2.akamaized.net/i/u/770x0/61e7401afd4fea34699f3ac84a468a74.jpg'}}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.profileName}>
              {this.props.fullName}
            </Text>
          </View>
          <View style={styles.centerContainer}>
            <View style={styles.detailContainer}>
              <View style={styles.detailContent}>
                <Text style={styles.profileDetail}>
                  Role
                </Text>
                <Text style={styles.profileDetail}>
                  Email
                </Text>
                <Text style={styles.profileDetail}>
                  Team
                </Text>
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.profileDetail}>
                  {this.props.role ? this.props.role : "Super Administrator" }
                </Text>
                <Text style={styles.profileDetail}>
                  {this.props.email ? this.props.email : "Coba@coba.com" }
                </Text>
                <Text style={styles.profileDetail}>
                  {this.props.team ? this.props.team : "-" }
                </Text>
              </View>
            </View>
          </View>
        </View>
    );
  }
}

ProfileDetail.propTypes = {
  openDrawer: PropTypes.func,
  fullName: PropTypes.string,
  profilePictureFilepath: PropTypes.string,
  role: PropTypes.string,
  email: PropTypes.string,
  team: PropTypes.string,
};
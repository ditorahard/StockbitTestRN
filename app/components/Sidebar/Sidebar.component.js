import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import PropTypes from 'prop-types';
import NavigationService from '../../routes/NavigationService';

// const routes = ["Home", "Profile", "Logout"];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
          </Image>
          <List>
            <ListItem
              button
              onPress={() => {NavigationService.navigate('Home');}}>
              <Text>Home</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {NavigationService.navigate('CourseList');}}>
              <Text>Courses</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => {NavigationService.navigate('Profile');}}>
              <Text>Profile</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => { 
                NavigationService.navigate('Login');
              }}>
              <Text>Logout</Text>
            </ListItem>
          </List>
          {
          // <List
          //   dataArray={routes}
          //   renderRow={data => {
          //     return (
          //       <ListItem
          //         button
          //         onPress={() => this.props.navigation.navigate(data)}>
          //         <Text>{data}</Text>
          //       </ListItem>
          //     );
          //   }}
          // />
          }
        </Content>
      </Container>
    );
  }
}

SideBar.propTypes = {
  logout: PropTypes.func,
};
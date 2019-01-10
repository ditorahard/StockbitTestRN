import React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './FooterTabs.component.style';
import PropTypes from 'prop-types';	
import { Button, Text, Footer, FooterTab, Icon } from 'native-base';
import * as action from '../../redux/actions/course.actions';
import {connect} from 'react-redux';

class FooterTabs extends React.Component {

  render() {
    return (
    <Footer>
        <FooterTab>
            <Button light vertical active={this.props.tabActive==this.props.firstTab ? true : false} onPress={()=>{this.props.changeTabCourseDetail(this.props.firstTab)}}>
              <Icon name="apps" />
              <Text style={styles.tabText}>{this.props.firstTab}</Text>
            </Button>
            <Button light vertical active={this.props.tabActive==this.props.secondTab ? true : false} onPress={()=>{this.props.changeTabCourseDetail(this.props.secondTab)}}>
              <Icon name="camera" />
              <Text style={styles.tabText}>{this.props.secondTab}</Text>
            </Button>
            <Button light vertical active={this.props.tabActive==this.props.thirdTab ? true : false} onPress={()=>{this.props.changeTabCourseDetail(this.props.thirdTab)}}>
              <Icon active name="navigate" />
              <Text style={styles.tabText}>{this.props.thirdTab}</Text>
            </Button>
            <Button light vertical active={this.props.tabActive==this.props.fourthTab ? true : false} onPress={()=>{this.props.changeTabCourseDetail(this.props.fourthTab)}}>
              <Icon name="person" />
              <Text style={styles.tabText}>{this.props.fourthTab}</Text>
            </Button>
            <Button light vertical active={this.props.tabActive==this.props.fifthTab ? true : false} onPress={()=>{this.props.changeTabCourseDetail(this.props.fifthTab)}}>
              <Icon name="person" />
              <Text style={styles.tabText}>{this.props.fifthTab}</Text>
            </Button>
        </FooterTab>
    </Footer>
    );
  }
}


FooterTabs.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  firstTab: PropTypes.string.isRequired,
  secondTab: PropTypes.string.isRequired,
  thirdTab: PropTypes.string.isRequired,
  fourthTab: PropTypes.string.isRequired,
  fifthTab: PropTypes.string.isRequired,
  firstIcon: PropTypes.string,
  secondIcon: PropTypes.string,
  thirdIcon: PropTypes.string,
  fourthIcon: PropTypes.string,
  fifthIcon: PropTypes.string,
  // tabActive: PropTypes.string
  // action : PropTypes.func.isRequired,
  // content: PropTypes.array.isRequired,
  // size: PropTypes.number.isRequired,
  // styles: PropTypes.object.isRequired,
  // isReady: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  tabActive: state.courseDetail.tabActive,
});

const mapDispatchToProps = (dispatch) => {
  return{
    changeTabCourseDetail: (tabPressed) => dispatch(action.changeTabCourseDetail(tabPressed)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterTabs);
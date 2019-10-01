import React from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import { teamHeaderBg } from "../../../../assets/images";
import ListElement from './ListElement'
import Legend from '../../../../components/Legend'
import colors from '../../../../assets/theme/colors'
import appData from '../../../../utils/appData'

const dummy = [
  {
    name: 'Leave',
    color: colors.green
  },
  {
    name: 'idk',
    color: colors.yellow
  },
  {
    name: 'idk2',
    color: colors.pink
  },
  {
    name: 'idk2',
    color: colors.orange
  }
]

export default class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      maxNoRequests: -1,
      legendData: [],
      showingUsers: []
    }
  }
  
  componentDidMount = () => {
    this.setState(state => ({
      ...state,
      showingUsers: this.props.navigation.getParam('showingUsers')
    }))
    this.props.getReport(this.props.filter)
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps === this.props) {
      return
    }

    if(!prevProps.getReportSuccess && this.props.getReportSuccess){
      
      let maxNoRequests = -1
      const legendData = []
      this.props.report.forEach(report => {
        Object.keys(report.report).forEach(key => {
          if(!legendData.find(data => data.label === appData.leaveTypes[key])){
            legendData.push({
              label: appData.leaveTypes[key],
              color: appData.leaveColors[key]
            })
          }
        }) 
        if(report.requests.length > maxNoRequests){
          maxNoRequests = report.requests.length
        }
      });
      this.setState(state => ({
        ...state,
        maxNoRequests,
        legendData
      }))
    }
  }

  onModalOpen = () => {
   this.setState({modal: true})
 }

 onModalClose = () => {
  this.setState({modal: false})
 }

  render() {
    return (
      <View style={styles.base}>
        <Header bg={teamHeaderBg} title="My Team" />
        {this.state.maxNoRequests !== -1 && <View style={styles.mainContainer}>
          <FlatList horizontal data={this.props.report.filter(rep => this.state.showingUsers.includes(rep.user.id))} 
          renderItem={({item, index}) => <ListElement maxNoRequests={this.state.maxNoRequests} report={item} />} />
        </View>}
        <View style={styles.legendContainer}>
          <Legend data={this.state.legendData} />
        </View>
      </View>
    );
  }
}

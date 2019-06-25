import React, { Component } from 'react';
import { fetchData, fetchDataFulfilled, fetchDataRejected,setItemLength } from './redux/reducer';
import { createStore } from "redux";
import {
  Text,
  View,
	ScrollView,
	Button,
	Dimensions
} from 'react-native';
import Styles from "./styles";
import Card from "./components/Card.js";
import intialStore from './redux/reducer';
import { Provider} from 'react-redux';
import { getPopularMovies } from './services/api';

const store = createStore(intialStore);

class App extends Component {
	state={
		realod:false
	}

	componentDidMount() {
		getPopularMovies()
		.then((response) => {
			store.dispatch(fetchDataFulfilled(response))
			store.dispatch(fetchData(false))
		})
		.catch(e => {
			console.error(e);
		})
	}

	show_more() {
		store.dispatch(setItemLength(20))
		this.setState({reload:true})
	}

  render() {
    return (
      <View style={Styles.container}>
				<Provider store={store}>
					<ScrollView>
					<View style={{height:store.getState().itemLength*300, width:"100%"}}>
	        <Card />
					</View>
					<Button
 						title="More"
						onPress={() => {this.show_more()}}
						/>
					</ScrollView>
				</Provider>
      </View>
    );
  }
}

export default App;

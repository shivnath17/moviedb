import React, { Component } from 'react';
import {
  Text,
  View,
	Image,
	TouchableHighlight
} from 'react-native';
import Styles from "./Styles";
import { connect } from 'react-redux';
import { rateMovie } from '../services/api';


class Card extends Component {
	state= {
		number_of_items:10
	}

	rating(bool, id) {
		if (bool == true) rateMovie(10, id)
		else rateMovie(1, id)
	}

  render() {
		const {movies, itemLength} = this.props
		if ( movies.length != 0){
			return (
	      movies.results.map((item, index) => {
					if(index < itemLength){
						return (
							<View style={Styles.container} key={index}>
								<View style={Styles.sectionOne}>
									<View style={Styles.poster}>
										<Image
											style={Styles.posterSize}
										  source={{uri:"https://image.tmdb.org/t/p/w500" +item.poster_path}}
										/>
									</View>
									<View style={Styles.textContainer}>
										<View style={Styles.tittelContainer}>
											<Text style={Styles.tittelSize}>{item.title}</Text>
										</View>
										<View style={Styles.seprater} />
										<View style={Styles.overviewContainer}>
											<Text style={Styles.overviewSize}>{item.overview}</Text>
										</View>
									</View>
								</View>
								<View style={Styles.sectionTwo}>
									<View style={Styles.reactionContainer}>
										<View style={Styles.likeSubContainer}>
											<TouchableHighlight onPress={ () => {this.rating(false, item.id)}}>
													<Text style={Styles.text}>Dislike</Text>
											</TouchableHighlight>
										</View>
										<View style={Styles.dislikeContainer}>
											<TouchableHighlight onPress={ () => {this.rating(true, item.id)}}>
												<Text style={Styles.text}>Like</Text>
											</TouchableHighlight>
										</View>
									</View>
								</View>
				    	</View>
						)
					}
					else {
						return <View />
					}
				})
	    );
		}
		else {
			return <View />
		}
  }
}

const mapStateToProps = function(state) {
  return {
    movies: state.movies,
    itemLength: state.itemLength
  }
}

export default connect(mapStateToProps)(Card);

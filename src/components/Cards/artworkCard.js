import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import IconArrowLeft from '../Icons/IconArrowLeft';
import IconHeart from '../Icons/IconHeart';
import {setScreen} from '../../actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  FadeInUp,
  FadeOutUp,
} from 'react-native-reanimated';
import {Toaster} from '../Toast/Toaster';
const ArtWork = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const favoriteSelect = useSharedValue(0);
  const [favoriteSelectToast, setFavoriteSelectToast] = React.useState(false);

  favoriteSelectToast;
  const dispatch = useDispatch();
  const artwork = useSelector(state => state.artWork);

  useEffect(() => {
    const fetchFavorite = async () => {
      const saved = await AsyncStorage.getItem('favorites');
      var favoriteList = JSON.parse(saved);
      if (favoriteList !== null) {
        const found = favoriteList.find(element => element === artwork.id);
        if (found === undefined) {
          favoriteSelect.value = 0;
        } else {
          favoriteSelect.value = 1;
        }
      }
    };

    fetchFavorite();
  }, []);

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            favoriteSelect.value,
            [0, 1],
            [1, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: favoriteSelect.value,
        },
      ],
    };
  });

  const handleOnFavorite = async () => {
    setFavoriteSelectToast(true);
    setTimeout(() => {
      [setFavoriteSelectToast(false), console.log(favoriteSelectToast)];
    }, 1000);
    favoriteSelect.value = withSpring(favoriteSelect.value ? 0 : 1);
    const saved = await AsyncStorage.getItem('favorites');

    var favoriteList = JSON.parse(saved);
    if (favoriteList !== null) {
      const found = favoriteList.find(element => element === artwork.id);

      if (found === undefined) {
        favoriteList.push(artwork.id);
      } else {
        const index = favoriteList.indexOf(artwork.id);
        if (index > -1) {
          favoriteList.splice(index, 1);
        }
      }
      await AsyncStorage.setItem('favorites', JSON.stringify(favoriteList));
    } else {
      var list = [];
      list.push(artwork.id);
      await AsyncStorage.setItem('favorites', JSON.stringify(list));
    }
  };

  return (
    <View style={styles.card}>
      {favoriteSelectToast && <Toaster data={favoriteSelect.value} />}
      <View style={styles.header}>
        <TouchableOpacity onPress={async () => dispatch(setScreen('Home'))}>
          <IconArrowLeft size={40} />
        </TouchableOpacity>
        <View>
          <Animated.View style={[outlineStyle]}>
            <TouchableOpacity onPress={async () => handleOnFavorite()}>
              <IconHeart size={40} color={'black'} />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={fillStyle}>
            <TouchableOpacity
              onPress={async () => handleOnFavorite()}
              style={{top: -40}}>
              <IconHeart size={40} color={'red'} />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri:
            'https://www.artic.edu/iiif/2/' +
            artwork.image_id +
            '/full/843,/0/default.jpg',
        }}
      />

      <View>
        <Text style={styles.title}>{artwork.title}</Text>
      </View>
      <View>
        <Text numberOfLines={4} style={styles.by}>
          By: {artwork.artist_title !== null ? artwork.artist_title : 'Unknow'}
        </Text>
        <Text numberOfLines={4} style={styles.by}>
          Origin:{' '}
          {artwork.place_of_origin !== null
            ? artwork.place_of_origin
            : 'Unknow'}
        </Text>
      </View>

      <View style={styles.detailsView}>
        <Text numberOfLines={4} style={styles.details}>
          {artwork.thumbnail !== null ? artwork.thumbnail.alt_text : ''}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 800,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '50%',
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: '800',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  by: {
    fontSize: 18,
    fontWeight: '500',
    color: 'gray',
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  details: {
    fontSize: 18,
    fontWeight: '500',
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});
export default ArtWork;

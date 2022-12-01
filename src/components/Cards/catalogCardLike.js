import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {getArtwork} from '../../services/catalogService';
import {setArtwork, setScreen, setViewType} from '../../actions';

import Icon1 from '../Icons/IconViewTpye1';
import Icon2 from '../Icons/IconViewType2';
import IconHome from '../Icons/IconHome';

const Item = ({title, imageid, id, details, viewType, dispatch}) => (
  <TouchableOpacity
    style={styles.card(viewType)}
    onPress={async () => [
      dispatch(setArtwork(await getArtwork(id))),
      dispatch(setScreen('Details')),
    ]}>
    <Image
      style={styles.images}
      resizeMode="cover"
      source={{
        uri:
          'https://www.artic.edu/iiif/2/' +
          imageid +
          '/full/843,/0/default.jpg',
      }}
    />
    <View style={styles.titleView}>
      <Text style={styles.title}>
        {title} {id}
      </Text>
    </View>
    <View style={styles.detailsView}>
      <Text numberOfLines={4} style={styles.details}>
        {details.alt_text !== null ? details.alt_text : ''}
      </Text>
    </View>
  </TouchableOpacity>
);

const CatalogCardsLikes = ({catalogs, viewType}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const artwork = useSelector(state => state.artWork);
  const dispatch = useDispatch();

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      imageid={item.image_id}
      id={item.id}
      details={item.thumbnail !== null ? item.thumbnail : ''}
      viewType={viewType}
      dispatch={dispatch}
    />
  );

  const renderHeader = () => (
    <View>
      <View style={styles.header}>
        <Image style={styles.tinyLogo} source={require('../Images/logo.png')} />
        <Text style={styles.titleHeader}>Art Institute of Chicago</Text>
      </View>
      <Text style={styles.titleHeader2}>Likes</Text>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footerText}>
      <ActivityIndicator />
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.buttonLike}>
        <TouchableOpacity onPress={() => dispatch(setScreen('Home'))}>
          <IconHome size={40} color={'black'} />
        </TouchableOpacity>
      </View>
      {Object.values(catalogs).length !== 0 && (
        <View style={styles.button}>
          <TouchableOpacity onPress={() => dispatch(setViewType(2))}>
            <Icon1 />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(setViewType(1))}>
            <Icon2 />
          </TouchableOpacity>
        </View>
      )}

      {viewType === 1 ? (
        <View>
          <FlatList
            ref={ref => {
              this.flatListRef = ref;
            }}
            data={catalogs}
            renderItem={renderItem}
            key={'_'}
            keyExtractor={item => '_' + item.id}
            numColumns={1}
            ListHeaderComponent={renderHeader}
            ListEmptyComponent={() => (
              <Text style={[styles.title, {paddingBottom: 50}]}>
                You don't have favorite artworks saved
              </Text>
            )}
          />
        </View>
      ) : (
        <View>
          <FlatList
            ref={ref => {
              this.flatListRef = ref;
            }}
            data={catalogs}
            renderItem={renderItem}
            key={'#'}
            keyExtractor={item => '#' + item.id}
            numColumns={2}
            ListHeaderComponent={renderHeader}
            ListEmptyComponent={() => (
              <Text style={[styles.title, {paddingBottom: 50}]}>
                You don't have favorite artworks saved
              </Text>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  titleHeader: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  titleHeader2: {
    textAlign: 'left',
    fontSize: 25,
    color: 'black',
    fontWeight: '500',
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  card: viewType => ({
    alignItems: 'center',
    borderRadius: 8,
    height: 400,
    marginBottom: 20,
    width: viewType === 1 ? '90%' : '40%',
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 0,
    backgroundColor: 'white',
  }),
  titleView: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  images: {
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    width: '100%',
    height: '60%',
  },
  detailsView: {
    height: 100,
    width: '100%',
  },
  details: {
    paddingHorizontal: 15,
  },
  button: {
    top: '98%',
    right: '0%',
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    width: 80,
  },
  buttonLike: {
    top: '98%',
    left: '0%',
    paddingLeft: 10,
    width: 50,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
  },
});
export default CatalogCardsLikes;

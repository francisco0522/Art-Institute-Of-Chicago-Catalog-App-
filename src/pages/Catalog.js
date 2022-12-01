import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {setCatalog, setFavoriteArr} from '../actions';
import {getCatalog, getFavorites} from '../services/catalogService';
import CatalogCards from '../components/Cards/catalogCard';
import CatalogCardsLike from '../components/Cards/catalogCardLike';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ArtworkCards from '../components/Cards/artworkCard';

function Catalog() {
  const catalogs = useSelector(state => state.catalogs);
  const viewType = useSelector(state => state.viewtype);
  const page = useSelector(state => state.page);
  const limit = useSelector(state => state.limit);
  const favorite = useSelector(state => state.favoriteList);
  const screen = useSelector(state => state.screen);
  const favoritearr = useSelector(
    state => state.favoritesCatalog,
    shallowEqual,
  );

  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchCatalog = async () => {
      const catalogRes = await getCatalog(page, limit);
      setLoading(false);
      dispatch(setCatalog(catalogRes));
    };

    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('favorites');
        if (JSON.parse(jsonValue) != null) {
          const favRes = await getFavorites(JSON.parse(jsonValue));

          dispatch(setFavoriteArr(favRes));
        }
      } catch (e) {
        // error reading value
      }
    };

    fetchCatalog();
    getData();
  }, [screen]);

  return (
    <SafeAreaView>
      {loading ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View>
          {screen === 'Home' ? (
            <CatalogCards
              catalogs={catalogs}
              viewType={viewType}
              page={page}
              limit={limit}
            />
          ) : screen === 'Details' ? (
            <ArtworkCards />
          ) : (
            <View>
              <CatalogCardsLike catalogs={favoritearr} viewType={viewType} />
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default Catalog;

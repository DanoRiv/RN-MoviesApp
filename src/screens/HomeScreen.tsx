/* eslint-disable react-hooks/exhaustive-deps */
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { useMovies } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBg } from '../components/GradientBg';
import { getImageColors } from '../helpers/getImageColors';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';

export const HomeScreen = () => {
  const { width: windowWidth } = Dimensions.get('window');

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { setGradientColors } = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary, secondary] = await getImageColors(uri);

    setGradientColors({ primary, secondary });
  };

  useEffect(() => {
    if (nowPlaying.length > 0){
      getPosterColors(0);
    }
  }, [nowPlaying]);


  if (isLoading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
        <ActivityIndicator color="blue" size={50} />
      </View>
    );
  }

  return (
    <GradientBg>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          {/* Main Carousel */}
          <View style={{ height: 440 }}>
            <Carousel
              loop={false}
              width={windowWidth}
              height={windowWidth * 0.8}
              autoPlay={false}
              data={nowPlaying}
              mode="parallax"
              modeConfig={{
                parallaxScrollingScale: 1,
                parallaxAdjacentItemScale: 0.5,
                parallaxScrollingOffset: windowWidth / 2,
              }}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <MovieCard movie={item} />
                </View>
              )}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          {/* Popular movies */}
          <HorizontalSlider title="Tendencias" movies={popular} />
          <HorizontalSlider title="Mejores Calificados" movies={topRated} />
          <HorizontalSlider title="Próximamente" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBg>
  );
};

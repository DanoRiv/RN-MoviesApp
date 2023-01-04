import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { FullMovie } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CastCard } from './CastCard';

interface Props {
  fullMovie: FullMovie;
  cast: Cast;
}

export const MovieDetails = ({fullMovie, cast}: Props) => {

  const currencyFormatted = fullMovie.budget.toLocaleString('en', {style: 'currency', currency: 'USD'});

  return (
    <>
      {/* Details */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="star-outline"
            color="grey"
            size={16}
          />
          <Text>{fullMovie.vote_average}</Text>
          <Text style={{ marginLeft: 5 }}>
             - { fullMovie.genres.map(gen => gen.name).join(', ')}
          </Text>
        </View>
          {/* story */}
          <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
            Resumen
          </Text>
          <Text style={{ fontSize: 18, marginTop: 5}}>
            {fullMovie.overview}
          </Text>

          {/* Budget */}
          <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
            Presupuesto
          </Text>
          <Text style={{ fontSize: 18, marginTop: 5}}>
            {currencyFormatted}
          </Text>
      </View>
      {/*  Casting  */}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20}}>
          Actores
        </Text>
        <FlatList
          data= { cast }
          keyExtractor={(item)=> item.id}
          renderItem={({item})=> (
            <CastCard actor={item}/>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10}}
        />
      </View>
    </>
  );
};

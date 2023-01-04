import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
  actor: Cast
}

export const CastCard = ({ actor }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {
        actor.profile_path &&
        <Image
          source={{uri}}
          style={{width: 50, height: 50, borderRadius: 8}}
        />
      }

      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          { actor.name }
        </Text>
        <Text style={{fontSize: 16, opacity: 0.7}}>
          { actor.character }
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 8,
      height: 50,
      shadowColor: '#111',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
      elevation: 10,
      marginLeft: 20,
      paddingRight:15,
    },
    actorInfo: {
      marginLeft: 7,
      marginTop: 3,
    },
});

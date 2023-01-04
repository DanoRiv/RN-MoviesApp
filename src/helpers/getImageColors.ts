import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {fallback: '#084F6A'});

  let primary = '';
  let secondary = '';

  switch (colors.platform) {
    case 'android':
      // android result properties
      primary = colors.darkVibrant || '#084F6A';
      secondary = colors.average || '#2F343F';
      break;
    case 'web':
      // web result properties
      primary = colors.darkVibrant || '#084F6A';
      secondary = colors.lightVibrant || '#2F343F';
      break;
    case 'ios':
      // iOS result properties
      primary = colors.primary || '#084F6A';
      secondary = colors.secondary || '#2F343F';
      break;
    default:
      throw new Error('Unexpected platform key');
  }

  return [ primary, secondary];
};

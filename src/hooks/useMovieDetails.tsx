import { useEffect, useState } from 'react';
import movieDb from '../api/movieDb';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import { FullMovie } from '../interfaces/movieInterface';

interface MovieDetails {
  isLoading: boolean;
  fullMovie?: FullMovie;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    fullMovie: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDb.get<FullMovie>(`/${movieId}`);
    const castPromise = await movieDb.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailsResponse, castResponse] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      fullMovie: movieDetailsResponse.data,
      cast: castResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};

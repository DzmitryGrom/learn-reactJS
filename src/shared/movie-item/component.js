import React from 'react';

import styles from './component.less';

type Props = {
  poster: string,
  title: string,
  release: string,
  genres: Array<any>,
  onMovieClick: Function,
};

const MovieItem = ({
  poster, title, release, genres, onMovieClick,
}: Props) => (
  <div onClick={onMovieClick} onKeyDown={onMovieClick} className={styles.movieItem} role="presentation">
    <div style={{ backgroundImage: `url(${poster})` }} className={styles.movieItem__img} />
    <div className={styles.movieItem__info}>
      <div>
        <h3 className={styles.movieItem__title}>{title}</h3>
        <h4 className={styles.movieItem__genre}>
          { genres && (genres.length > 1 ? genres.map(item => (
            <span key={item}>
              {item}
              {' '}
            </span>
          )) : genres) }
        </h4>
      </div>
      <span className={styles.movieItem__year}>{release && release.substring(0, 4)}</span>
    </div>
  </div>
);

export default MovieItem;

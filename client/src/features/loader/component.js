import React from 'react';

import styles from './component.less';


const Loader = () => (
  <div className={styles.loading}>
    <span className={styles.loading__elem} />
  </div>
);

export default Loader;

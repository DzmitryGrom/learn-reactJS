import React from 'react';

import styles from './component.less';
import Logo from '../logo';
import Filter from "../search-filter";

const Header = () => (
    <div className={styles.header}>
        <Logo />
        <Filter />
    </div>
);

export default Header;
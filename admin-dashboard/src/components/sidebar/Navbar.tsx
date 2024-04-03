import { sidebarItems } from '@/data/sidebar';
import { useState } from 'react';
import styles from './Sidebar.module.css';

const Navbar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.navbar}>
      {sidebarItems.map((item, index) => (
        <div
          className={
            selected === index ? `${styles.item} ${styles.active}` : styles.item
          }
          key={item.title}
          onClick={() => setSelected(index)}
        >
          <item.icon />
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Navbar;

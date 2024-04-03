import Logo from './Logo';
import Navbar from './Navbar';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Sidebar;

import logo from '@/assets/logo.png';
import styles from './Sidebar.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
      <span>
        Sh<span className={styles.pink}>o</span>p
      </span>
    </div>
  );
};

export default Logo;

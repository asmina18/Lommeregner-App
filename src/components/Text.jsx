import styles from '../styles/Text.module.scss';

export const Text = ({ text }) => {
  return <p className={styles.text}>{text}</p>;
};

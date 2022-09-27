import styles from './five.module.css';

/* eslint-disable-next-line */
export interface FiveProps {}

export function Five(props: FiveProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Five!</h1>
    </div>
  );
}

export default Five;

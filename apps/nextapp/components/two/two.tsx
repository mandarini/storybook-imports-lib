import styles from './two.module.css';
import { Four } from '@addons-imports/nextlib';

/* eslint-disable-next-line */
export interface TwoProps {}

export function Two(props: TwoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Two!</h1>
      <Four />
    </div>
  );
}

export default Two;

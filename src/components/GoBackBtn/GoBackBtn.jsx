import { Link } from "react-router-dom";
import styles from './GoBackBtn.module.css'

export const GoBackBtn = ({ path }) => {
  return <Link className={styles.link} to={path}>Go back</Link>;
};

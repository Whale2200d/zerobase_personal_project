import styles from "./Day.module.css";

export default function Date({ day }) {
  return <span className={styles.dateContaier}>{day}</span>;
}

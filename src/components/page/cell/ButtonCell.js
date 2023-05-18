import styles from "./ButtonCell.module.css";

export default function ButtonCell({ children }) {
  return <button className={styles.button}>{children}</button>;
}

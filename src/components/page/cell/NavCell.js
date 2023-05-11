import styles from "./NavCell.module.css";

export default function Nav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.buttonContainer}>
        <button>로고</button>
        <button>카테고리</button>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" />
      </div>
    </div>
  );
}

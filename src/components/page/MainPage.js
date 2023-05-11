import styles from "./MainPage.module.css";
import Nav from "./cell/NavCell";
import ItemCell from "./cell/ItemCell";

export default function MainPage() {
  return (
    <>
      <Nav />
      <div className={styles.mainPageContainer}>
        <div className={styles.celebratedPersonContainer}>
          기념일 당사자 설명 내용
        </div>
        <div className={styles.listContainer}>
          <div className={styles.itemsContainer}>
            <ItemCell />
            <ItemCell />
            <ItemCell />
            <ItemCell />
            <ItemCell />
            <ItemCell />
            <ItemCell />
            <ItemCell />
            <ItemCell />
            <ItemCell />
          </div>
          <div className={styles.paginationContainer}>페이지네이션</div>
        </div>
      </div>
    </>
  );
}

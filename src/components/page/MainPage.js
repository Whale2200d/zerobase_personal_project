import styles from "./MainPage.module.css";

import NavCell from "./cell/NavCell";
import ItemCell from "./cell/ItemCell";
import PaginationCell from "./cell/PaginationCell";

import { useState } from "react";

export default function MainPage() {
  const MAX_PAGE = 10;
  const [page, setPage] = useState(1);

  return (
    <>
      <NavCell />
      <div className={styles.mainPageContainer}>
        {/* <div className={styles.celebratedPersonContainer}>
          기념일 당사자 설명 내용
        </div> */}
        <div className={styles.listContainer}>
          <div className={styles.itemsWrapper}>
            <ul className={styles.itemsList}>
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
            </ul>
          </div>
          <div className={styles.paginationContainer}>
            <PaginationCell
              maxPage={MAX_PAGE}
              currentPage={page}
              onClickPageButton={(number) => setPage(number)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

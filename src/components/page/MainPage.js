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
              <ItemCell children={"상품 이름1"} link={"letter"} />
              <ItemCell children={"상품 이름2"} link={"letter"} />
              <ItemCell children={"상품 이름3"} link={"letter"} />
              <ItemCell children={"상품 이름4"} link={"letter"} />
              <ItemCell children={"상품 이름5"} link={"letter"} />
              <ItemCell children={"상품 이름6"} link={"letter"} />
              <ItemCell children={"상품 이름7"} link={"letter"} />
              <ItemCell children={"상품 이름8"} link={"letter"} />
              <ItemCell children={"상품 이름9"} link={"letter"} />
              <ItemCell children={"상품 이름10"} link={"letter"} />
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

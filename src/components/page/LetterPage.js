import styles from "./LetterPage.module.css";

import NavCell from "./cell/NavCell";
import ItemCell from "./cell/ItemCell";
import PaginationCell from "./cell/PaginationCell";

import { useState } from "react";

export default function LetterPage() {
  const MAX_PAGE = 10;
  const [page, setPage] = useState(1);

  return (
    <>
      <NavCell />
      <div className={styles.letterPageContainer}>
        {/* <div className={styles.celebratedPersonContainer}>
            기념일 당사자 설명 내용
          </div> */}
        <div className={styles.listContainer}>
          <div className={styles.itemsWrapper}>
            <ul className={styles.itemsList}>
              <ItemCell children={"포장지이름1"} link={"shoppingcart"} />
              <ItemCell children={"포장지이름2"} link={"shoppingcart"} />
              <ItemCell children={"포장지이름3"} link={"shoppingcart"} />
              <ItemCell children={"포장지이름4"} link={"shoppingcart"} />
              <ItemCell children={"포장지이름5"} link={"shoppingcart"} />
              <ItemCell children={"편지지이름1"} link={"shoppingcart"} />
              <ItemCell children={"편지지이름2"} link={"shoppingcart"} />
              <ItemCell children={"편지지이름3"} link={"shoppingcart"} />
              <ItemCell children={"편지지이름4"} link={"shoppingcart"} />
              <ItemCell children={"편지지이름5"} link={"shoppingcart"} />
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

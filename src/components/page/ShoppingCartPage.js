import styles from "./ShoppingCartPage.module.css";
import cx from "clsx";

import { Link } from "react-router-dom";

import NavCell from "./cell/NavCell";

export default function ShoppingCartPage() {
  return (
    <>
      <NavCell />
      <div className={styles.shoppingCartPageContainer}>
        <div className={styles.totalItemsWrapper}>
          {/* 전체 상품 레이아웃 */}
          <div className={styles.itemList}>
            <div>추천 판매품 이미지</div>
            <div className={styles.itemNamePriceCount}>
              <div>상품 이름</div>
              <div>상품 가격</div>
              <input type="number" placeholder="개수를 입력해주세요" />
            </div>
          </div>

          <div className={styles.packageList}>
            <div>추천 포장지 이미지</div>
            <div className={styles.itemNamePriceCount}>
              <div>포장지 이름</div>
              <div>포장지 가격</div>
              <input type="number" placeholder="개수를 입력해주세요" />
            </div>
          </div>

          <div className={styles.letterList}>
            <div>추천 편지지 이미지</div>
            <div className={styles.itemNamePriceCount}>
              <div>편지지 이름</div>
              <div>편지지 가격</div>
              <input type="number" placeholder="개수를 입력해주세요" />
            </div>
          </div>
        </div>
        <div className={styles.totalPriceWrapper}>
          {/* 상품 총 가격 레이아웃 */}
          <div>
            {`총 선물 가격: ${10000}원 + 배송비: ${3000}원 = 총 가격 ${13000}원`}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          {/* 계속 쇼핑하기 및 구매하기 버튼 */}
          <div className={styles.buttonWrapper}>
            <button>
              <Link to="/main" className={cx(styles.link, styles.fontBlack)}>
                다른 선물 보기
              </Link>
            </button>
            <button>
              <Link to="/letter" className={cx(styles.link, styles.fontBlack)}>
                다른 포장지/편지지 보기
              </Link>
            </button>
            <button>
              <Link
                to="/delivery"
                className={cx(styles.link, styles.fontWhite)}
              >
                구매하기
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

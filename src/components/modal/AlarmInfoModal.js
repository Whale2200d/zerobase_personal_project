import styles from "./AlarmInfoModal.module.css";
import { RxCross1 } from "react-icons/rx";
import cx from "clsx";

import { Link } from "react-router-dom";

import NavCell from "../page/cell/NavCell";

export default function AlarmModal() {
  return (
    <>
      <NavCell />
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <span>GIFT-MIND</span>
            <Link to="/calendar">
              <button className={styles.cancelButton}>
                <RxCross1 />
              </button>
            </Link>
          </div>
          {/* modal 제목 */}
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>GIFT 알람 서비스</h1>
          </div>

          {/* modal 내용 */}
          <div className={styles.modalBody}>
            <div className={styles.dateContainer}>
              <div>알람 날짜</div>
              <input
                type="date"
                className={cx(styles.dateInput, styles.input)}
              />
            </div>
            <div className={styles.timeContainer}>
              <div>시간</div>
              <input
                type="time"
                className={cx(styles.timeInput, styles.input)}
              />
            </div>
            <div className={styles.contentContainer}>
              <div>내용</div>
              <textarea
                type="text"
                className={cx(styles.contentInput, styles.input)}
                placeholder="예시> 홍길동 생일 일주일 전! 장바구니에 담긴 선물 구매하기!"
              />
            </div>
            <div className={styles.buttonContainer}>
              <Link to="/main" className={styles.link}>
                확인
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

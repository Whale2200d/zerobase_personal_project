import styles from "./TakerInfoModal.module.css";
import { RxCross1 } from "react-icons/rx";

import { Link } from "react-router-dom";

import NavCell from "../page/cell/NavCell";

export default function TakerInfoModal() {
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
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>당사자 성향 정보</h1>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.heightContainer}>
              <div>키</div>
              <input
                type="text"
                className={styles.input}
                placeholder="예시> 175cm"
              />
            </div>
            <div className={styles.weightContainer}>
              <div>몸무게</div>
              <input
                type="text"
                className={styles.input}
                placeholder="예시> 80kg"
              />
            </div>
            <div className={styles.clothesSizeContainer}>
              <div>옷 사이즈</div>
              <input
                type="text"
                className={styles.input}
                placeholder="예시> XL(115), 허리 32인치"
              />
            </div>
            <div className={styles.etcContainer}>
              <div>기타</div>
              <textarea
                type="text"
                className={styles.textarea}
                placeholder="예시> #술 #레고 #컴퓨터 #게임 #꽃 #활기참 #소심함 #안경 #ENTP #A형 #독서 #인문학 #경제학 #주식투자 #패션 #가죽공예 #꼼꼼한 ..."
              />
            </div>
            <div className={styles.buttonContainer}>
              <Link to="/Alarm" className={styles.link}>
                확인
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

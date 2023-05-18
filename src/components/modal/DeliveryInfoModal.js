import styles from "./DeliveryInfoModal.module.css";
import { RxCross1 } from "react-icons/rx";
import cx from "clsx";

import { Link } from "react-router-dom";

import NavCell from "../page/cell/NavCell";

export default function DeliveryInfoModal() {
  return (
    <>
      <NavCell />
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <span>GIFT-MIND</span>
            <Link to="/shoppingcart">
              <button className={styles.cancelButton}>
                <RxCross1 />
              </button>
            </Link>
          </div>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>GIFT 배송 정보</h1>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.addressContainer}>
              <div>주소</div>
              <div className={styles.addressWrapper}>
                <input
                  type="text"
                  className={cx(styles.giverAddressInput, styles.input)}
                  placeholder="선물 당사자 주소를 입력해주세요"
                  size="20"
                />
                <input
                  type="text"
                  className={cx(styles.takerAddressInput, styles.input)}
                  placeholder="선물 제공자 주소를 입력해주세요"
                  size="20"
                />
              </div>
            </div>
            <div className={styles.packageContainer}>
              <div>포장 유무</div>
              <div className={styles.packageWrapper}>
                <fieldset>
                  <div>
                    <input
                      type="radio"
                      name="packageRadios"
                      id="plzPackage"
                      value="plzPackage"
                      className={cx(styles.plzPackageInput, styles.input)}
                      checked
                    />
                    <label for="plzPackage">포장하여 배송</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="packageRadios"
                      id="selfPackage"
                      value="selfPackage"
                      className={cx(styles.selfPackageInput, styles.input)}
                    />
                    <label for="selfPackage">직접 포장할게요</label>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className={styles.contactContainer}>
              <div>연락처</div>
              <div className={styles.contactWrapper}>
                <input
                  type="tel"
                  className={cx(styles.contactInput, styles.input)}
                  placeholder="예시> 01012345678"
                  size="20"
                />
              </div>
            </div>
            <div className={styles.takerNameContainer}>
              <div>수령인</div>
              <div className={styles.takerNameWrapper}>
                <input
                  type="text"
                  className={cx(styles.takerNameInput, styles.input)}
                  placeholder="예시> 홍길동"
                  size="20"
                />
              </div>
            </div>
            <div className={styles.emailContainer}>
              <div>이메일</div>
              <div className={styles.emailWrapper}>
                <input
                  type="email"
                  className={cx(styles.emailInput, styles.input)}
                  placeholder="예시> qwer1234@gmail.com"
                  size="20"
                />
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <div>3</div>
              <button>3초 간 눌러서 구매하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

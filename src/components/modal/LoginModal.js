import styles from "./LoginModal.module.css";
import { RxCross1 } from "react-icons/rx";

import { Link } from "react-router-dom";

import GoogleLoginButtonCell from "../page/cell/GoogleLoginButtonCell";

import NavCell from "../page/cell/NavCell";

export default function LoginModal() {
  return (
    <>
      <NavCell />
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <span>GIFT-MIND</span>
            <Link to="/">
              <button className={styles.cancelButton}>
                <RxCross1 />
              </button>
            </Link>
          </div>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>GIFT-MIND 로그인</h1>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.idContainer}>
              <div>아이디</div>
              <input type="text" className={styles.input} />
            </div>
            <div className={styles.pwContainer}>
              <div>비밀번호</div>
              <input type="text" className={styles.input} />
            </div>
            <div className={styles.buttonContainer}>
              <button>로그인</button>
              <button>회원가입</button>
              <GoogleLoginButtonCell />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

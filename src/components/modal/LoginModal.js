import styles from "./LoginModal.module.css";
import { RxCross1 } from "react-icons/rx";

export default function LoginModal() {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <span>gift-mind</span>
          <button>
            <RxCross1 />
          </button>
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>GIFT-MIND-LOGIN</h1>
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
            <button>구글</button>
          </div>
        </div>
      </div>
    </div>
  );
}

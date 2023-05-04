import styles from "./SignUpModal.module.css";
import { RxCross1 } from "react-icons/rx";

export default function SignUpModal() {
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
          <h1 className={styles.title}>GIFT-MIND-SIGN-UP</h1>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.idContainer}>
            <div>아이디</div>
            <div className={styles.idCheck}>
              <input type="text" className={styles.input} />
              <button>중복검사</button>
            </div>
          </div>
          <div className={styles.pwContainer}>
            <div>비밀번호</div>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.pwContainer}>
            <div className={styles.idpwItem}>비밀번호 확인</div>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.buttonContainer}>
            <button>확인</button>
          </div>
        </div>
      </div>
    </div>
  );
}

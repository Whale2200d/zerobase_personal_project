import styles from "./ModalBasicLayout.module.css";
import { RxCross1 } from "react-icons/rx";

export default function ModalBasicLayout() {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <span>GIFT-MIND</span>
          <button>
            <RxCross1 />
          </button>
        </div>
        {/* props로 children값을 받아온다. HOC, High Order Component */}
      </div>
    </div>
  );
}

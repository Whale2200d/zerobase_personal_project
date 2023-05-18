import styles from "./NavCell.module.css";

import { Link } from "react-router-dom";

import TabsModal from "../../modal/TabsModal";
import ButtonCell from "./ButtonCell";

export default function Nav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.buttonContainer}>
        <button>로고</button>
        <button>카테고리 ▼</button>
        <div className={styles.tabsModalContainer}>
          <TabsModal />
        </div>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="검색 후 엔터" />
        <Link to="/login">
          <ButtonCell>Login</ButtonCell>
        </Link>
        <Link to="/signup">
          <ButtonCell>SignUp</ButtonCell>
        </Link>
      </div>
    </div>
  );
}

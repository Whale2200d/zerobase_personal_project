import styles from "./ItemCell.module.css";

import { Link } from "react-router-dom";

export default function ItemCell({ children, link }) {
  return (
    <Link to={`/${link}`}>
      <li className={styles.itemContainer}>
        <div>상품 이미지</div>
        <div>
          <span>{children}</span>
          <span>상품 가격</span>
        </div>
      </li>
    </Link>
  );
}

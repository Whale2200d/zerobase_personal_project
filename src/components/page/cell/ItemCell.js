import styles from "./ItemCell.module.css";

export default function ItemCell() {
  return (
    <div className={styles.itemContainer}>
      <div>상품 이미지</div>
      <div>
        <span>상품 이름</span>
        <span>상품 가격</span>
      </div>
    </div>
  );
}

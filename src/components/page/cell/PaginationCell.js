import styles from "./PaginationCell.module.css";
import cx from "clsx";

export default function PaginationCell({
  currentPage,
  maxPage,
  onClickPageButton,
}) {
  return (
    <div>
      <button
        className={cx(styles.button, styles.blueButton)}
        disabled={currentPage === 1}
      >
        {" < Prev"}
      </button>
      {new Array(maxPage).fill(null).map((_, i) => (
        <PageButton
          key={i}
          number={i + 1}
          onClick={onClickPageButton}
          selected={i + 1 === currentPage}
        />
      ))}
      <button
        className={cx(styles.button, styles.blueButton)}
        disabled={currentPage === maxPage}
      >
        {" Next >"}
      </button>
    </div>
  );
}

function PageButton({ number, selected, onClick }) {
  return (
    <button
      className={cx(styles.button, { [styles.selected]: selected })}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
}

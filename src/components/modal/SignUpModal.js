import styles from "./SignUpModal.module.css";
import { RxCross1 } from "react-icons/rx";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fbase";

import NavCell from "../page/cell/NavCell";

export default function SignUpModal() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

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
            <h1 className={styles.title}>GIFT-MIND 회원가입</h1>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.idContainer}>
              <div>아이디</div>
              <div className={styles.idCheck}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Email"
                  onChange={(e) => {
                    setRegisterEmail(e.target.value);
                  }}
                />
                <button>중복검사</button>
              </div>
            </div>
            <div className={styles.pwContainer}>
              <div>비밀번호</div>
              <input
                type="text"
                className={styles.input}
                placeholder="Email-Password"
                onChange={(e) => {
                  setRegisterPassword(e.target.value);
                }}
              />
            </div>
            <div className={styles.pwContainer}>
              <div className={styles.idpwItem}>비밀번호 확인</div>
              <input type="text" className={styles.input} />
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={register}>확인</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

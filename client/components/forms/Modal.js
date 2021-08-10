import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
// import styled from "styled-components";
import styles from '../../styles/Modal.module.css'

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };


  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <div className={styles.modal}>
          <div className={styles.header}>{title}
            <a href="#" onClick={handleClose}>
              <button className="btn">Close</button>
            </a>
          </div>       
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};



export default Modal;

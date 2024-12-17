import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/components/modal.module.css";


const Backdrop = (props) => {
	return <div onClick={props.onClickBackdrop} className={styles.backdrop} />;
};

const ModalOverlay = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClickBackdrop={props.onClickBackdrop} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
};

export default Modal;

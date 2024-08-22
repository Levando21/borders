/** @format */

import css from "./Modal.module.css";
import Links from "../Links/Links";
import Image from "../Image/Image";

export default function Modal() {
	return (
		<div className={css.modalcont}>
			<Image />
			<Links />
		</div>
	);
}

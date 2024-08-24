/** @format */

import css from "./Preloader.module.css";
import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
export default function Preloader() {
	const comp = useRef(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline({
				onComplete: () => {
					gsap.to(comp.current, {
						autoAlpha: 0,
						duration: 1,
						ease: "power2.out",
						onComplete: () => {
							gsap.set(comp.current, { display: "none" });
						},
					});
				},
			});

			tl
				.from("#title", { opacity: 0, y: "+=30" })
				.to("#title", { opacity: 0, y: "-=30", delay: 2 })
				.from("#slide", { xPercent: "-100", duration: 1, delay: 0.3 });
		}, comp);

		return () => ctx.revert();
	}, []);

	return (
		<>
			<div
				className={css.preloader}
				id="slide"
				ref={comp}>
				<h2
					className={css.counter}
					id="title">
					Click on platform
				</h2>
				<h2
					className={css.counter}
					id="title">
					Build borders
				</h2>
			</div>
		</>
	);
}

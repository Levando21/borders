/** @format */
import css from "./Links.module.css";
export default function Links() {
	return (
		<div>
			<ul>
				<li className={css.link}>
					<a
						href=""
						target="blank">
						<span>YouTube Music</span>
						<span className={css.youtube}></span>
					</a>
				</li>
				<li className={css.link}>
					<a
						href="https://soundcloud.com/user-809355084/sets/borders"
						target="blank">
						<span>Soundcloud</span>
						<span className={css.soundcloud}></span>
					</a>
				</li>
				<li className={css.link}>
					<a
						href=""
						target="blank">
						<span>Spotify</span>
						<span className={css.spoty}></span>
					</a>
				</li>
				<li className={css.link}>
					<a
						href=""
						target="blank">
						<span>Apple Music</span>
						<span className={css.apple}></span>
					</a>
				</li>
			</ul>
		</div>
	);
}

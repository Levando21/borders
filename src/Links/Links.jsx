/** @format */
import css from "./Links.module.css";
export default function Links() {
	return (
		<div>
			<ul className={css.linklist}>
				<li className={css.link}>
					<a
						href="https://soundcloud.com/user-809355084/sets/borders"
						target="blank">
						<button>
							<div className={css.pulse}>
								<span style={{ "--i": 0 }}></span>
								<span style={{ "--i": 1 }}></span>
								<span style={{ "--i": 2 }}></span>
								<span style={{ "--i": 3 }}></span>
								<span className={css.platform}>Soundcloud</span>
								<span className={css.youtube}></span>
							</div>
						</button>
					</a>
				</li>
				<li className={css.link}>
					<a
						href="https://soundcloud.com/user-809355084/sets/borders"
						target="blank">
						<button>
							<div className={css.pulse}>
								<span style={{ "--i": 0 }}></span>
								<span style={{ "--i": 1 }}></span>
								<span style={{ "--i": 2 }}></span>
								<span style={{ "--i": 3 }}></span>
								<span className={css.platform}>Soundcloud</span>
								<span className={css.soundcloud}></span>
							</div>
						</button>
					</a>
				</li>
				<li className={css.link}>
					<a
						href="https://soundcloud.com/user-809355084/sets/borders"
						target="blank">
						<button>
							<div className={css.pulse}>
								<span style={{ "--i": 0 }}></span>
								<span style={{ "--i": 1 }}></span>
								<span style={{ "--i": 2 }}></span>
								<span style={{ "--i": 3 }}></span>
								<span className={css.platform}>Soundcloud</span>
								<span className={css.spoty}></span>
							</div>
						</button>
					</a>
				</li>
				<li className={css.link}>
					<a
						href="https://soundcloud.com/user-809355084/sets/borders"
						target="blank">
						<button>
							<div className={css.pulse}>
								<span style={{ "--i": 0 }}></span>
								<span style={{ "--i": 1 }}></span>
								<span style={{ "--i": 2 }}></span>
								<span style={{ "--i": 3 }}></span>
								<span className={css.platform}>Soundcloud</span>
								<span className={css.apple}></span>
							</div>
						</button>
					</a>
				</li>
			</ul>
		</div>
	);
}

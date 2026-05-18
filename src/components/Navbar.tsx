import { Show, UserButton } from "@clerk/tanstack-react-start";
import { usePostHog } from "@posthog/react";
import { Link } from "@tanstack/react-router";
import { LogIn, UserPlus } from "lucide-react";

const Navbar = () => {
	const posthog = usePostHog();

	return (
		<nav className="navbar">
			<div className="brand">
				<div className="mark">
					<div className="glyph" />
				</div>
				<Link to="/">
					<span>Skilled</span>
				</Link>
			</div>
			<div className="actions">
				<Show when={"signed-in"}>
					<UserButton />
				</Show>
				<Show when={"signed-out"}>
					<Link
						to="/sign-in/$"
						className="btn-primary"
						onClick={() => posthog?.capture("sign_in_link_clicked")}
					>
						<LogIn size={16} />
						Sign in
					</Link>
					<Link
						to="/sign-up/$"
						className="btn-secondary"
						onClick={() => posthog?.capture("sign_up_link_clicked")}
					>
						<UserPlus size={16} />
						Sign up
					</Link>
				</Show>
			</div>
		</nav>
	);
};

export default Navbar;

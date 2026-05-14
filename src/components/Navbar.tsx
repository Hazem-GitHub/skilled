import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from "@tanstack/react-router"
import { LogIn } from "lucide-react";

const Navbar = () => {
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
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton>
                        <button className="btn-primary">
                            <LogIn size={16} />
                            Sign in
                        </button>
                    </SignInButton>
                </SignedOut>
            </div>
        </nav>
    );
};

export default Navbar;

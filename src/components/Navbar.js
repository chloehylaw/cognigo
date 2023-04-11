import {Link, useMatch, useResolvedPath} from "react-router-dom";

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">CogniGo</Link>
        <ul>
            <CustomLink to="/games">Games Overview</CustomLink>
            <CustomLink to="/progression">Progression Map</CustomLink>
            <CustomLink to="/challenges">Daily Challenges</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
            <CustomLink to="/register">Register</CustomLink>
            <CustomLink to="/settings">Settings</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}
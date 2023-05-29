import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Nav() {
    return(
        <nav className="menu">
            <ul>
                <CustomLink to="/how-to-play">How To Play</CustomLink>
                <CustomLink to="/play-now">Play Now</CustomLink>
                <CustomLink to="/leaderboards">Leaderboards</CustomLink>
                <CustomLink to="/points-table">Points Table</CustomLink>
                <CustomLink to="/prizes">Prizes</CustomLink>
            </ul>
        </nav>
        
    )
}   

function CustomLink( { to, children, ...props} ) {
    
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch( { path: resolvedPath.pathname, end: true});

    return(
        <li className={isActive ? 'activex' : ''}>
            <Link to={to} className='uppercase small-txt'>{ children }</Link>
        </li>
    )

}
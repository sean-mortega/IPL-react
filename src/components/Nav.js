import { Link } from 'react-router-dom';

export default function Nav() {
    return(
        <nav className="menu">
            <ul>
                <CustomLink href="/howToPlay">How To Play</CustomLink>
                <CustomLink href="/leaderboards">Leaderboards</CustomLink>
            </ul>
        </nav>
        
    )
}   

function CustomLink( { href, children, ...props} ) {
    
    return(
        <li>
            <a href={href}>{ children }</a>
        </li>
    )

}
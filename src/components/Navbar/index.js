import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarSection, Logo, Logotext, Ullist, ListItem, Anchor} from './style.js'


const Navbar = () => {
    return (
        // <div>

        //     <NavLink to='/'> Home</NavLink>
        //     <Link to='/Contact'>Contact</Link>

        <NavbarSection>

            <div className="container">

                <Logo>
                    <Logotext >Ultra Profile</Logotext>
                </Logo>

                <Ullist >
                    <ListItem><Link className='anchor' exact to="/">Home</Link></ListItem>
                    <ListItem><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><Link className='anchor' to="/contact">Contact</Link></ListItem>
                </Ullist>

            </div>

        </NavbarSection>
        
    )
}
export default Navbar;
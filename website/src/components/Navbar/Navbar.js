import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { CgMenuRight } from 'react-icons/cg'
import { IconContext } from 'react-icons'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavItem } from './NavbarStyles'
import { useLocation, useNavigate } from 'react-router-dom'
import { data } from '../../data/NavbarData'

function Navbar() {
    const [ show, setShow ] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const scrollTo = (id) => {
        const element = document.getElementById(id)
        
        element.scrollIntoView({
            behavior: 'smooth'
        })
    }

    const handleClick = () => {
        setShow(!show)
    }

    const closeMobileMenu = (to, id) => {
        console.log('route', to, id)
        if(id && location.pathname === '/') {
            scrollTo(id)
        }

        navigate(to)
        setShow(false)
    }

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav id={data[0].id}>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <NavIcon src='./assets/logo.png' alt='logo' />
                        Delta
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>{show ? <FaTimes /> : <CgMenuRight /> }</MobileIcon>
                    <NavMenu show={show}>
                        {data.map((el, index) => (
                            <NavItem key={index}>
                                <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                                    {el.text}
                                </NavLinks>
                            </NavItem>
                        ))}
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
  )
}

export default Navbar
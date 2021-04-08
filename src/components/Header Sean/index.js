import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import {
    HeaderWarp,
    Brand,
    PageName
} from './HeaderElements';
import {Button} from "react-bootstrap";

const Header = () => {

    return (
            <HeaderWarp>
                <BiMenuAltLeft style={{
                            color: '#fff',
                            fontSize: '30px' }} />
                <Brand>BAKKATOWN</Brand>
                <PageName>Reservations</PageName>
                <Button>Visit Site</Button>
            </HeaderWarp>
    )
}

export default Header;
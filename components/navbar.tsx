import React, { useState } from 'react';
import { Hidden, Box, Button } from '@material-ui/core';
import { section } from '../src/theme';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../public/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Navbar() {
  const [mouseHover, setPosition] = useState(null);

  const menuList = [
    {
      menuItem: 'home',
    },
    {
      menuItem: 'about us',
      subMenu: ['our mision', 'contact us'],
    },
    {
      menuItem: 'how it works',
    },
    {
      menuItem: 'fees',
    },
    {
      menuItem: 'funds',
    },
    {
      menuItem: 'resources',
      subMenu: ['calculator', 'glossary', 'blog', 'webinars'],
    },
  ];

  return (
    <>
      <Box
        position="sticky"
        top='0'
        bgcolor='white'
        display="flex"
        justifyContent={{ xs: 'space-between', sm: 'center' }}
        flexDirection={{ sm: 'column', md: 'row' }}
        alignItems="center"
        px={section.paddingX}
        py="2rem"
        zIndex='1'
      >
        <Box width={120}>
          <Link href="/">
            <a>
              <Image src={logo} />
            </a>
          </Link>
        </Box>
        <Hidden smUp>
          <MenuIcon />
        </Hidden>

        <Hidden only={['xs', 'md', 'lg', 'xl']}>
          <Box display="flex" style={{ gap: '1rem' }} py="1rem">
            <Button variant="outlined">Login</Button>
            <MenuIcon />
            <Button variant="contained">Sign up</Button>
          </Box>
        </Hidden>

        <Hidden smDown>
          <Box
            component="ul"
            display="flex"
            style={{ textTransform: 'capitalize', cursor: 'pointer' }}
          >
            {menuList.map((i, index) =>
              !i.subMenu ? (
                <Box key={index} component="li" mx="12px">
                  {i.menuItem}
                </Box>
              ) : (
                <Box
                  display="flex"
                  mx="12px"
                  onMouseEnter={() => setPosition(index)}
                  onMouseLeave={() => setPosition(null)}
                >
                  {i.menuItem}
                  <ExpandMoreIcon />
                  {mouseHover && (
                    <Box
                      component="ul"
                      position="absolute"
                      p="1rem"
                      pt="2.5rem"
                    >
                      {index === mouseHover ? (
                        <Box key={index} component="li" bgcolor='white'>
                          {menuList[mouseHover].subMenu.map((sub) => (
                            <Box
                            my='1rem'
                            px='1rem'
                            >{sub}</Box>
                          ))}
                        </Box>
                      ) : null}
                    </Box>
                  )}
                </Box>
              )
            )}
          </Box>
          <Box display="flex" style={{ gap: '1rem' }}>
            <Button variant="outlined">Login</Button>
            <Button variant="contained">Sign up</Button>
          </Box>
        </Hidden>
      </Box>
    </>
  );
}

import React, { useState } from 'react';
import { Hidden, Box, Button } from '@material-ui/core';
import { section } from '../src/theme';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../public/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Navbar() {
  const [position, setPosition] = useState(null);

  const menuList = [
    {
      menuItem: 'home',
      expand: false,
    },
    {
      menuItem: 'about us',
      expand: true,
      subMenu: ['our mision', 'contact us'],
    },
    {
      menuItem: 'how it works',
      expand: false,
    },
    {
      menuItem: 'fees',
      expand: false,
    },
    {
      menuItem: 'funds',
      expand: false,
    },
    {
      menuItem: 'resources',
      expand: true,
      subMenu: ['calculator', 'glossary', 'blog', 'webinars'],
    },
  ];

  return (
    <>
      <Box
        position="sticky"
        display="flex"
        justifyContent={{ xs: 'space-between', sm: 'center' }}
        flexDirection={{ sm: 'column', md: 'row' }}
        alignItems="center"
        px={section.paddingX}
        py="2rem"
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

        <Hidden only={['xs', 'md']}>
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
              !i.expand ? (
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
                  {position && (
                    <Box
                      component="ul"
                      position="absolute"
                      p="0.75rem"
                      mt="1.25rem"
                    >
                      {index === position ? (
                        <Box key={index} component="li">
                          {menuList[position].subMenu.map((sub) => (
                            <Box>{sub}</Box>
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

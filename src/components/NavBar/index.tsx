import { FC, memo, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-scroll';
import { MainContainer, ContainerName, NameParrafo } from './styles'
import HoverMotion from '../../animations/hover'

const pages = [
    'Education',
    'Job Experiences',
    'Entrepreneurship',
    'Skills',
    'Soft Skills',
    'BootCamp Projects',
    'Freelancer Projects',
]

const NavBarComp: FC = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <MainContainer>
            <AppBar
                sx={{
                    backgroundColor: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    boxShadow: 'none',
                    height: '60px',
                    // position: 'fixed',
                    // top: 0,
                }}
                position="static"
            >
                <Container
                    sx={{
                        display: { xs: 'block', md: 'flex' },
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    maxWidth="xl"
                >
                    <Toolbar disableGutters>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <ContainerName>
                                <NameParrafo>FULL STACK DEVELOPER</NameParrafo>
                            </ContainerName>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {
                                        xs: 'block',
                                        md: 'none',
                                        fontFamily: 'Poppins',
                                        marginRight: '10rem',
                                    },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <HoverMotion>
                                            <Link
                                                activeClass="active"
                                                to={page.toLowerCase().replace(' ', '-')}
                                                spy={true}
                                                smooth={true}
                                                duration={1500}
                                                offset={-170}
                                                onClick={handleCloseNavMenu}
                                            >
                                                <Typography textAlign="center">{page}</Typography>
                                            </Link>
                                        </HoverMotion>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        {/* <a href="/">
                                    <ImgLogo src={logo} alt="Logo" />
                                </a> */}
                        {/* <ImgLogoMobile
                                    src={logo}
                                /> */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <HoverMotion>

                                        <Link
                                            activeClass="active"
                                            to={page.toLowerCase().replace(' ', '-')}
                                            spy={true}
                                            smooth={true}
                                            duration={1000}
                                            offset={-70}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <Typography textAlign="center">{page}</Typography>
                                        </Link>
                                    </HoverMotion>
                                </MenuItem>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </MainContainer>
    )
}
export default memo(NavBarComp)

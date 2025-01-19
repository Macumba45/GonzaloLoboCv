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
import { MainContainer, ContainerName, NameParrafo } from './styles'
import HoverMotion from '../../animations/hover'
import FloatHomeButton from '../FloatHomeButton'

const pages = [
    'Projects',
    'Education',
    'Job Experiences',
    'Entrepreneurship',
    'Skills',
    'Soft Skills',
    'BootCamp Projects',
]

const NavBarComp: FC = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleScroll = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
        handleCloseNavMenu();
    };

    return (
        <MainContainer>
            <FloatHomeButton />
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
                                {pages.map((page: any) => (
                                    <MenuItem
                                        key={page}
                                        onClick={() => handleScroll(page.toLowerCase().replace(' ', '-'))}

                                    >
                                        <HoverMotion>
                                            <Typography textAlign="center">
                                                {page}
                                            </Typography>

                                        </HoverMotion>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={() => handleScroll(page.toLowerCase().replace(' ', '-'))}
                                >
                                    <HoverMotion>

                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
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

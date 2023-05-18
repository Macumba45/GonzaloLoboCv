import { FC, memo, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { MainContainer, ContainerName, NameParrafo } from './styles'

const pages = [
    'Education',
    'Work Experiences',
    'Entrepreneurship',
    'Skills',
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
                    boxShadow: 'none',
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
                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
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
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        fontFamily: 'Poppins',
                                        marginRight: '2rem',
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </MainContainer>
    )
}
export default memo(NavBarComp)
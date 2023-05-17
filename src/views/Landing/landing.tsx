import { FC, memo } from 'react'
import NavBar from '../../components/NavBar'
import MySelfComp from '../../components/Myself'
import WhoIAmComp from '../../components/WhoIAm'
import DividerWithChip from '../../components/Divider'

const Landing: FC = () => {
    return (
        <>
            <NavBar />
            <MySelfComp />
            <DividerWithChip label="Know me more " />
            <WhoIAmComp />
        </>
    )
}

export default memo(Landing)

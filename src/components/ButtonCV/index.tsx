import { FC, memo } from 'react'
import { Button } from '@mui/material'
import { Props } from './type'
import HoverMotion from '../../animations/hover'
import { motion } from 'framer-motion'

const PDF = require('../../../src/assets/GONZALOLOBOCV.pdf')

const ButtonCV: FC<Props> = ({ title }) => {
    const handleDownloadCV = () => {
        const link = document.createElement('a')
        link.href = PDF // Reemplaza con la URL de tu archivo PDF
        link.download = 'GONZALOLOBOCV.pdf' // Nombre del archivo descargado
        link.click()
    }

    return (
        <HoverMotion>
            <motion.div
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: [0.43, 0.13, 0.23, 0.96],
                }}
            >
                <Button
                    sx={{
                        color: '#000000',
                        marginBottom: '1rem',
                        borderColor: '#000000',
                        marginRight: '1rem',
                        marginLeft: '1rem',
                        width: '300px',
                        outline: 'none',
                        '&:hover': {
                            backgroundColor: '#000000',
                            color: '#ffffff',
                            outline: 'none',
                            border: 'none'
                        },
                    }}
                    variant="outlined"
                    component={motion.button}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                    onClick={handleDownloadCV}
                >
                    {title}
                </Button>
            </motion.div>
        </HoverMotion>
    )
}

export default memo(ButtonCV)

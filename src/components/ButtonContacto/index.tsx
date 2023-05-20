import { FC, memo } from 'react'
import { Button } from '@mui/material'
import { Props } from './type'
import HoverMotion from '../../animations/hover'
import { motion } from 'framer-motion'

const ButtonContacto: FC<Props> = ({ title }) => {
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
                <a style={{ textDecoration: 'none' }} href="mailto:gonzalolovo@gmail.com">
                    <Button
                        sx={{
                            borderColor: '#FF9900',
                            color: '#ffffff',
                            backgroundColor: '#021531',
                            marginBottom: '1rem',
                            marginRight: '1rem',
                            marginLeft: '1rem',
                            width: '300px',
                            '&:hover': {
                                borderColor: '#FF6600',
                                backgroundColor: '#4e87db',
                            },
                        }}
                        variant="contained"
                        component={motion.button}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: [0.43, 0.13, 0.23, 0.96],
                        }}
                    >
                        {title}
                    </Button>
                </a>
            </motion.div>
        </HoverMotion>
    )
}

export default memo(ButtonContacto)

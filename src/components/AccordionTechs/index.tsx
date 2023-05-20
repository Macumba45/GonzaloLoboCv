import { Accordion, AccordionDetails, Button } from '@mui/material'
import { useState } from 'react'
import { ImgTech } from './styles'

const TechAccordion = ({ techs }: any) => {
    const [expanded, setExpanded] = useState(false)

    const handleAccordionChange = () => {
        setExpanded(!expanded)
    }

    return (
        <Accordion
            sx={{
                backgroundColor: '#d5d5d5',
                justifyContent: 'center',
                width: '300px',
                display: 'flex',
                flexDirection: 'column',
            }}
            expanded={expanded}
            onChange={handleAccordionChange}
        >
            <Button
                sx={{
                    backgroundColor: 'black',
                    '&:hover': {
                        backgroundColor: 'yellow',
                        color: 'black ', // Cambia este valor por el color deseado
                    },
                }}
                variant="contained"
                onClick={handleAccordionChange}
            >
                Techs used
            </Button>
            <AccordionDetails>
                <div
                    style={{
                        justifyContent: 'center',
                        display: 'flex',
                        flexWrap: 'wrap',
                        height: '100%',
                    }}
                >
                    {techs.map((tech: any, index: any) => (
                        <ImgTech key={index} src={tech} />
                    ))}
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default TechAccordion

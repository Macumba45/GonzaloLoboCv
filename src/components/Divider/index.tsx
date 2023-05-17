import { FC, memo } from 'react'
import { Divider, Chip } from '@mui/material'
import { Props } from './type'

const DividerWithChip: FC<Props> = ({ label }) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '2rem',
                }}
            >
                <Divider sx={{ width: '8rem', flexGrow: 1 }} />
                <Chip
                    label={label}
                    style={{
                        margin: '0 10px',
                        backgroundColor: 'black',
                        color: 'white',
                    }}
                />
                <Divider sx={{ width: '8rem', flexGrow: 1 }} />
            </div>
        </div>
    )
}

export default memo(DividerWithChip)

import { motion } from 'framer-motion'

const HoverMotion = ({ children }: any) => {
    return <motion.div whileHover={{ scale: 1.05 }}>{children}</motion.div>
}

export default HoverMotion

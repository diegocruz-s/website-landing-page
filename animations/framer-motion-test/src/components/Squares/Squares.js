import { motion } from 'framer-motion'


export const Squares = () => {
    const parent = {
        variantA: { scale: 1 },
        variantB: { scale: 1.25 },
        }
        const child = {
        variantA: { bottom: 0, right: 0, rotate: 0 },
        variantB: { top: 0, left: 0, rotate: 180 },
        }
    return (
        <motion.div
            style={{
            width: 200,
            height: 200,
            borderRadius: 30,
            backgroundColor: "rgba(255,255,255,0.5)",
            position: "relative",
            marginTop: "18rem",
            }}
            variants={parent}
            initial="variantA"
            whileHover="variantB"
        >
            <motion.div 
                style={{
                width: 85,
                height: 85,
                borderRadius: "20px 20px 30px 20px",
                backgroundColor: "#fff",
                position: "absolute",
                bottom: 0,
                right: 0,
                }}
                variants={child}
                transition={{
                type: "spring",
                damping: 4,
                mass: 0.2,
                stiffness: 150, 
                }}
            />
        </motion.div>
    )
}

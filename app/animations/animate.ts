import { motion } from 'framer-motion'

export const scrollUpEffects = {
    initial : {y : 30, opacity : 0},
    whileInView : {y : 0, opacity : 1},
    transition : {durattion : 0.5, delay : 0.2}
}
export const scrollDownEffects = {
    initial : {y : -30, opacity : 0},
    animate : {y : 0, opacity : 1},
    transition : {duration : 0.5}
}
export const scrollUpDelayEffects = {
    initial : {y : 20, opacity : 0},
    whileInView : {y : 0, opacity : 1},
    transition : {durattion : 0.3, delay : 0.5}

}

export const scrollLeftEffects = {
    initial : {x : -30, opacity : 0},
    animate : {x : 0, opacity : 1},
    transition : {duration : 0.5}
}
export const buttonHoverEffects = {
    whileTap : {scale : 0.95},
    whileHover : {scale : 1.05}
}
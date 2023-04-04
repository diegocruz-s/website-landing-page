import styles from './Button.module.css'

const Button = ({ text }) => {
  return (
    <button className={styles.buttonComponent}>
        {text}
    </button>
  )
}

export {Button}
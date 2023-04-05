import styles from './Button.module.css'
import classNames from 'classnames'

const Button = ({ text, inverse }) => {
  console.log(inverse)
  
  const style = {
    '--widthAfterInitial': inverse ? '100%' : '0',
    '--widthAfterFinal': inverse ? '0' : '100%',
    '--color': inverse ? '#1b1b1b' : '#fff',
    '--colorHover': inverse ? '#fff' : '#1b1b1b'
  };
  return (
    <button 
      className={`${styles.buttonComponent}`}
      style={style}
    >
        {text}
    </button>
  )
}

export {Button}
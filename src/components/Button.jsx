
import styles from "../styles/Button.module.scss";

export const Button=({label,onClick})=>{

return(
  <button className={styles.button}onClick={onClick}>
    {label}
  </button>
)
}
import errorPage from "../../assets/imagenes/error-4044.png";
import styles from "./errorPage.module.css"

function ErrorPage() {
  return (
    <div className={styles.errordiv}>
      <img src={errorPage} alt="error-page" className={styles.errorimg}/>
    </div>
  );
}

export default ErrorPage;

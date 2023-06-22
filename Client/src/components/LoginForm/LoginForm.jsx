import {useState} from "react";

import styles from "./LoginForm.module.css";

function validate(user) {
  let errors = {};

  if (!user.email) {
    errors.email = "Enter tour email";
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
    errors.email = "Invalid email";
  }
  if (user.email.length >= 35) {
    errors.email = "Invalid email";
  }
  if (!/\d/.test(user.password)) {
    errors.password = "Password must contain a number";
  }
  if (user.password.length < 6 || user.password.length > 15) {
    errors.password = "Password must be 6 to 15 characters";
  }
  if (!user.password) {
    errors.password = "Enter a password";
  }

  return errors;
}

function LoginForm({login}) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: " ",
    password: " ",
  });

  function handleChange(e) {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!errors.email && !errors.password) {
      login(user);
    } else {
      alert("Datos incorrectos");
    }
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formTitle}>
        <h1>Iniciar Sesión</h1>
      </div>
      <form type="submit">
        <div className={styles.credentials}>
          <label>Username</label>
          <input
            onChange={handleChange}
            placeholder="abcd@abcd.com"
            name="email"
            value={user.email}
          />
          {errors.email ? <span>{errors.email}</span> : null}
        </div>
        <div className={styles.credentials}>
          <label>Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={user.password}
          />
          {errors.password ? <span>{errors.password}</span> : null}
        </div>
        <button className={styles.submitBtn} onClick={handleSubmit}>
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
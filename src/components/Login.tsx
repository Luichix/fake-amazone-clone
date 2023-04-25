import React, { useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [alert, setAlert] = useState({
    message: '',
    type: '',
    active: false,
  });

  useEffect(() => {
    const handlerTimeOut = setTimeout(
      () => {
        setAlert({
          message: '',
          type: '',
          active: false,
        });
      },

      5000
    );

    return () => {
      clearTimeout(handlerTimeOut);
    };
  }, [alert]);

  const signIn = (event: any) => {
    event.preventDefault();

    if (email.length === 0) {
      setAlert({
        message: 'Escriba su dirección de correo electrónico',
        type: 'error',
        active: true,
      });
      return;
    }

    if (password.length === 0) {
      setAlert({
        message: 'Escriba su contraseña',
        type: 'error',
        active: true,
      });
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((auth: any) => {
        navigate('/');
      })
      .catch((error: any) => {
        setAlert({
          message: 'Error al iniciar sesión',
          type: 'error',
          active: true,
        });
        return;
      });
  };

  return (
    <div className="login">
      {alert.active && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}

      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h2>Iniciar Sesión</h2>

        <form>
          <h5>Correo electrónico</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Contraseña</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login_signInButton">
            Continuar
          </button>
        </form>

        <p>
          Al continuar, aceptas las &nbsp;
          <b>Condiciones de uso </b> y el <b>Aviso de privacidad</b>
          &nbsp; de <b>AMAZON FAKE CLONE</b>.
        </p>

        <p style={{ textAlign: 'center', marginBottom: '0px' }}>
          ¿No tienes una cuenta?
        </p>
        <button className="login_registerButton">
          <Link to="/signup">Crea tu cuenta de Amazon</Link>
        </button>
      </div>
    </div>
  );
}

export default Login;

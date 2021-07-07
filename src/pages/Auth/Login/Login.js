import { useRef, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';
export default function Login(props) {
  const [auth, setAuth] = useAuth();
  const emailRef = useRef();
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(null);
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      //Logowanie

      if (false) {
        setAuth(true);
        history.push('/');
      } else {
        setValid(false);
        setPassword('');
      }
      setLoading(false);
    }, 500);
  };
  return (
    <div>
      <h2>Logowanie</h2>

      {valid === false ? (
        <div className='alert alert-danger'>Nie poprawne dane logowanie</div>
      ) : null}
      <form onSubmit={submit}>
        <div className='form-group'>
          <label>Email</label>
          <input
            ref={emailRef}
            value={email}
            type='email'
            className='form-control'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className='form-group'>
          <label>Hasło</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type='password'
            className='form-control'
          />
        </div>
        <LoadingButton loading={loading}>Zaloguj</LoadingButton>
      </form>
    </div>
  );
}

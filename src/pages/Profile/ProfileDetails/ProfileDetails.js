export default function ProfileDetails(props) {
  return (
    <form>
      <div classname='form-group'>
        <label>Email</label>
        <input type='email' value='adam@gmail.com' className='form-control' />
      </div>
      <div classname='form-group'>
        <label>Hasło</label>
        <input type='password' placeholder='******' className='form-control' />
      </div>
      <button className='btn btn-primary'>Zapisz</button>
    </form>
  );
}

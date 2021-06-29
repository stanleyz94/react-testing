import ThemeContext from '../../../context/ThemeContext';

export default function LoadingIcon() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className='d-flex justify-content-center'>
          <div className={`spinner-border m-5 text-${theme}`} role='status'>
            <span className='sr-only'></span>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

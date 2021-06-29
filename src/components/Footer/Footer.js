import ThemeContext from '../../context/ThemeContext';

const Footer = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={`text-center m-3 text-${theme}`}>Noclegi 2021</div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Footer;

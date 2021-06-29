import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Layout from './components/Layout/Layout';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/ThemeContext';

class App extends Component {
  static contextType = ThemeContext;

  hotels = [
    {
      id: 1,
      name: 'Pod akacjami',
      city: 'Warszawa',
      rating: 8.3,
      description:
        ' ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat',
      image: '',
    },
    {
      id: 2,
      name: 'Dębowy',
      city: 'Lublin',
      rating: 8.8,
      description:
        ' ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat',
      image: '',
    },
  ];
  state = {
    hotels: [],
    loading: true,
    theme: 'danger',
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hotels: this.hotels,
        loading: false,
      });
    }, 1000);
  }

  searchHandler(term) {
    console.log('szukaj z app', term);
    const hotels = [...this.hotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );

    this.setState({ hotels });
  }

  changeTheme = () => {
    const newTheme = this.state.theme === 'primary' ? 'danger' : 'primary';
    this.setState({ theme: newTheme });
  };

  render() {
    const header = (
      <Header>
        <Searchbar onSearch={(term) => this.searchHandler(term)} />
        <ThemeButton onChange={this.changeTheme} />
      </Header>
    );
    const content = this.state.loading ? (
      <LoadingIcon />
    ) : (
      <Hotels hotels={this.state.hotels} />
    );
    const menu = <Menu />;
    const footer = <Footer />;

    return (
      <ThemeContext.Provider
        value={{ theme: this.state.theme, onChange: this.changeTheme }}
      >
        <Layout header={header} menu={menu} content={content} footer={footer} />
      </ThemeContext.Provider>
    );
  }
}

export default App;

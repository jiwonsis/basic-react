import React, { Component } from 'react';
import './App.scss';
import BannerView from './component/BannerView';
import ContentView from './component/ContentView';
import FooterView from "./component/FooterView";
import TopBarView from "./component/TopBarView";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <BannerView />
        <TopBarView />
        <ContentView />
        <FooterView />
      </div>
    );
  }
}

export default App;

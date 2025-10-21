import  { Component } from 'react'
import Header from './Components/Header/Header';
import './App.css'; 
import FoodItem from './Components/FoodItem/FoodItem';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <Header />
        {/* FoodItem */}
        <FoodItem />
        {/* Footer */}
      </div>
    );
  }
}

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Папоратник',
          img: 'paporatnik.jpg',
          desc: 'Купите замечатеьлный папоратник, чтобы он стоял у вас и радовал глаз',
          category: 'plants',
          price: '399'
        },
        {
          id: 2,
          title: 'Папоратник',
          img: 'paporatnik2.jpg',
          desc: 'Купите замечатеьлный папоратник, чтобы он стоял у вас и радовал глаз',
          category: 'plants',
          price: '499'
        },
        {
          id: 3,
          title: 'Горшок для папоратника',
          img: 'gorshok.jpg',
          desc: 'Купите замечатеьлный горшок для папоратника, чтобы в нем стоял папоратник',
          category: 'pots',
          price: '299'
        },
        {
          id: 4,
          title: 'Папоратник',
          img: 'paporatnik_3.jpg',
          desc: 'Купите замечатеьлный папоратник, чтобы он стоял у вас и радовал глаз',
          category: 'plants',
          price: '599'
        },
        {
          id: 5,
          title: 'Папоратник',
          img: 'paporatnik_3.jpg',
          desc: 'Купите замечатеьлный папоратник, чтобы он стоял у вас и радовал глаз',
          category: 'plants',
          price: '199'
        },
        
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder  = this.addToOrder.bind(this)
    this.deleteOrder  = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
  return (
    <div className="wrapper">
      <Header orders = {this.state.orders} onDelete = {this.deleteOrder}/>
      <Categories chooseCategory = {this.chooseCategory}/>
      <Items onShowItem = {this.onShowItem} items  = {this.state.currentItems} onAdd = {this.addToOrder}/>
      {this.state.showFullItem && <ShowFullItem onAdd = {this.addToOrder} onShowItem = {this.onShowItem} item = {this.state.fullItem}/>}
      <Footer/>
    </div>
  );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if (category === 'all'){
      this.setState({ currentItems: this.state.items })
      return 
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

deleteOrder(id){
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item]}, () => {
    })
  }
}
 
export default App;

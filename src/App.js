import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import React,{useState} from 'react';
import AddItem from './components/AddItem';

function App() {
  const products=[
    {
      price:9999,
      name:"Samsung",
      quantity:0
    },
    {
      price:99999,
      name:"Redmi",
      quantity:0

    }
  ]
let [productList, setProductList]=useState(products)
let [totalAmount,setTotalAmount]=useState(0)
 const incrementQuantity=(index)=>{
    let newProductList=[...productList];
    let newTotalAmount=totalAmount
    newProductList[index].quantity++;
    newTotalAmount+=newProductList[index].price
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);

 }
 const decrementQuantity=(index)=>{
  let newProductList=[...productList];
  let newTotalAmount=totalAmount
  if(newProductList[index].quantity > 0)
  {
    newProductList[index].quantity--;
    newTotalAmount-=newProductList[index].price
  }  
  newTotalAmount-=newProductList[index].price
  setTotalAmount(totalAmount)
  setProductList(newProductList);

}
const resetQuantity=()=>{
  let newProductList=[...productList];
  newProductList.map((products)=>{
    products.quantity=0

})
setProductList(newProductList);
setTotalAmount(0);
}
const removeItem=(index)=>{
  let newProductList=[...productList];
  let newTotalAmount=totalAmount
  newTotalAmount-=newProductList[index].quantity*newProductList[index.price]
  newProductList.splice(index,1);
  setProductList(newProductList)
  setTotalAmount(totalAmount);
}
const addItem=(name,price)=>{
  let newProductList=[...productList]
  newProductList.push({
    price:price,
    name:name,
    quantity:0
  });
  setProductList(newProductList);


}
  return (
    <>
    <Navbar/>

    <main className='container mt-5'>
      <AddItem addItem={addItem}/>
    <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem}/>
    </main>
    <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    
    </>
    
  );
}

export default App;

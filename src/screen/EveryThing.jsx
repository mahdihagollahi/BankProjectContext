import Transaction from "./Transaction";
import History from "./History";
import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
import { IoCard } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import InputCard from "./InputCard";
import { useState } from "react";
import Card from "../Commponent/Card";



function EveryThing() {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [cvv2, setcvv2] = useState("");
  const [year, setyear] = useState("");
  const [month, setmonth] = useState("");
  const [password, setpassword] = useState("");
  const [inventory, setinventory] = useState("");
  const [list, setlist] = useState([]);
  const [idCart , setidCart]= useState("")

  const [nameCart, setnameCart] = useState("");
  const [numberCart, setnumberCart] = useState("");
  const [cvv2Cart, setcvv2Cart] = useState("");
  const [yearCart, setyearCart] = useState("");
  const [monthCart, setmonthCart] = useState("");
  const [passwordCart, setpasswordCart] = useState("");
  const [cartCash, setcartCash] = useState(null);
  const [historyList , sethistoryList] = useState([])

  const SelectCard = (event) => {
    const foundedCard =list.map((card)=>{
      return card.id === event.id;
    })
    console.log(foundedCard)

    if(foundedCard){
      setnumberCart(event.number),
      setcvv2Cart(event.cvv),
      setpasswordCart(event.password),
      setnameCart(event.name),
      setmonthCart(event.month),
      setyearCart(event.year)
      setidCart(event.id)
    }
    
  }

  

const AddCard =(name,number,password,cvv,year,month,inventory)=>{
const NewCard ={
  id:list.length + 1 ,
  name,
  number,
  password,
  cvv,
  year,
  month,
  inventory
}
console.log(NewCard)
setlist([...list,NewCard])


setname("")
setnumber("")
setcvv2("")
setyear("")
setmonth("")
setpassword("")
setinventory("")

}

// const negetive = (negetivePrice , id) =>{
//   const NewInventor = List.find((card) => {
//     return card.id === id && card.cartCash >= negetivePrice
//     ? {...card , Inventory:card.cartCash - negetivePrice}
//     :card
//   });
//   NewInventor.map((item)=>{
//     if(item.id === idCart){
//       const UpdateCash = {...item ,p:negetivePrice}
//       setHistory([...History , UpdateCash])
//       console.log(negetive)
//     }
    
//   })
// }

const negetiveInventory = (negetivePrice , id) => {
  const newCash = list.map((card)=>{
    return card.id === id && card.inventory >= negetivePrice
    ?{...card , inventory: card.inventory - negetivePrice}
    :card;
  });
  // const updatedList = List.map((card) => {
  //   if (card.id === id && card.cartCash >= negetivePrice) {
  //     return {...card, Inventory: card.cartCash - negetivePrice};
  //   }
  //   return card;
  // });

  newCash.map((item)=>{
    if(item.id === id){
      const Historycal ={...item , p:negetivePrice};
      sethistoryList([...historyList , Historycal])
      console.log(historyList)

    }
  })

  setlist(newCash);
  }
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <a className="flex items-center space-x-3 rtl:space-x-reverse">

            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8"/>

            <span className='"self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>  AceCoinpay </span>

          </a>

          <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">

            <span className="sr-only">Open main menu</span>

            <svg className="w-5 h-5"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" >

              <path  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>

            </svg>

          </button>

          <div className="hidden w-full md:block md:w-auto">

            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


              <li>

                <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"to="/">InputCard </Link>

              </li>

              <li>

                <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/Transaction"> Transaction</Link>

              </li>
              <li>
             <Link  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/History" >History</Link>

             </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
    
        <Route path="/History" element={<History historyList={historyList}/>}/>
        <Route index element={<InputCard AddCard={AddCard} name={name} number={number} setnumber={setnumber} setname={setname} cvv2={cvv2} setcvv2={setcvv2} year={year} setyear={setyear} month={month} setmonth={setmonth} password={password} setpassword={setpassword} inventory={inventory} setinventory={setinventory}  />} />
        <Route path="/Transaction" element={<Transaction  negetiveInventory={()=>negetiveInventory(cartCash , idCart)} cartCash={cartCash} setcartCash={setcartCash} historyList={historyList}  sethistoryList={sethistoryList}  numberCart={numberCart} nameCart={nameCart} setnameCart={setnameCart} cvv2Cart={cvv2Cart} setcvv2Cart={setcvv2Cart} yearCart={yearCart} setyearCart={setyearCart} monthCart={monthCart} setmonthCart={setmonthCart} passwordCart={passwordCart} setpasswordCart={setpasswordCart}    list={list} />} />
      </Routes>
    <div>


      {list.map((item) => {
        return (
        <Card  name={item.name} Number={item.number} Password={item.password} Cvv2={item.cvv} Year={item.year} Month={item.month} Inventory={item.inventory} SelectCard={()=>SelectCard(item)}/>
        )
      })}

      
  </div>
    </div>
  );
}

export default EveryThing;

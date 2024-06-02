import Transaction from "./Transaction";
import History from "./History";
import {  Route, Routes } from "react-router-dom";
import InputCard from "./InputCard";
import { useState } from "react";
import Card from "../Commponent/Card";
import Navbar from "../Commponent/Navbar";



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


  const [imageCard, setImageCard] = useState("");


  
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

const bankImge = (e) => {
  const value = e.target.value.slice(0,4);
  setnumber(value);

  switch (value) {
    case "6037":
      setImageCard("src/assets/Img/saderat.png");
      break;

    case "6219":
      setImageCard("src/assets/Img/Blue.png");
      break;

    case "5029":
      setImageCard("src/assets/Img/Dey.png");
      break;

    case "2071":
      setImageCard("src/assets/Img/Toseye.png");
      break;

    case "6276":
      setImageCard("src/assets/Img/Toseye.png");
      break;

    case "5022":
      setImageCard("src/assets/Img/Pasargard.png");
      break;

    case "5028":
      setImageCard("src/assets/Img/Shahr.png");
      break;

    case "5029":
      setImageCard("src/assets/Img/Taavon.png");
      break;

    case "5029":
      setImageCard("src/assets/Img/Karafarin-Bank-logo.png.webp");
      break;

    case "5054":
      setImageCard("src/assets/Img/gardeshgari.png");
      break;

    case "5057":
      setImageCard("src/assets/Img/iranZamin.png");
      break;

    case "5058":
      setImageCard("src/assets/Img/Kosar.png");
      break;

    case "5892":
      setImageCard("src/assets/Img/Sepah.png");
      break;

    case "5894":
      setImageCard("src/assets/Img/Refah.png");
      break;

    case "6037":
      setImageCard("src/assets/Img/Keshvarzi.png");
      break;

    case "6392":
      setImageCard("src/assets/Img/Keshvarzi.png");
      break;

    case "6037":
      setImageCard("src/assets/Img/Meli.png");
      break;

    case "6063":
      setImageCard("src/assets/Img/Mehr.png");
      break;

    case "6104" :
      setImageCard("src/assets/Img/Melat.png");
      break;

      case  "6104":
        setImageCard("src/assets/Img/Melat.png");
        break;

    case "6104":
      setImageCard("src/assets/Img/Melat.png");
      break;

    case "9919":
      setImageCard("src/assets/Img/Melat.png");
      break;

    case "62192":
      setImageCard("src/assets/Img/Saman.png");
      break;

    case "6221":
      setImageCard("src/assets/Img/Parsian-removebg-preview.png");
      break;

    case "6391":
      setImageCard("src/assets/Img/Parsian-removebg-preview.png");
      break;

    case "6278":
      setImageCard("src/assets/Img/Parsian-removebg-preview.png");
      break;

    case "6273":
      setImageCard("src/assets/Img/Ansar.png");
      break;

    case "6274":
      setImageCard("src/assets/Img/Noveen.png");
      break;
    case "6277":
      setImageCard("src/assets/Img/Post.svg");
      break;

    case "6279":
      setImageCard("src/assets/Img/Maadan.png");
      break;

    case "6280":
      setImageCard("src/assets/Img/Maskan.jpeg");
      break;

    case "6281":
      setImageCard("src/assets/Img/Etebary.png");
      break;

    case "6362":
      setImageCard("src/assets/Img/Ayandeh.png");
      break;

    case "6367":
      setImageCard("src/assets/Img/Markazi.png");
      break;

    case "6369":
      setImageCard("src/assets/Img/Hekmat.png");
      break;

    case "6393":
      setImageCard("src/assets/Img/Sina.png");
      break;

    case "63937":
      setImageCard("src/assets/Img/Mehr-eghtesad.png");
      break;
    case "6395":
      setImageCard("src/assets/Img/Ghavamin.png");
      break;
    case "6396":
      setImageCard("src/assets/Img/Sarmaye.png");
      break;

    default:
      setImageCard("");
      break;
  }
};

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
    
      <Navbar/>

      <Routes>
    
        <Route path="/History" element={<History historyList={historyList}/>}/>
        <Route index element={<InputCard bankImge={bankImge}  imageCard={imageCard} AddCard={AddCard} name={name} number={number} setnumber={setnumber} setname={setname} cvv2={cvv2} setcvv2={setcvv2} year={year} setyear={setyear} month={month} setmonth={setmonth} password={password} setpassword={setpassword} inventory={inventory} setinventory={setinventory}  />} />
        <Route path="/Transaction" element={<Transaction  negetiveInventory={()=>negetiveInventory(cartCash , idCart)} cartCash={cartCash} setcartCash={setcartCash} historyList={historyList}  sethistoryList={sethistoryList}  numberCart={numberCart} nameCart={nameCart} setnameCart={setnameCart} cvv2Cart={cvv2Cart} setcvv2Cart={setcvv2Cart} yearCart={yearCart} setyearCart={setyearCart} monthCart={monthCart} setmonthCart={setmonthCart} passwordCart={passwordCart} setpasswordCart={setpasswordCart}    list={list} />} />
      </Routes>
    <div>


      {list.map((item) => {
        return (
        <Card  bankImge={bankImge}  imageCard={imageCard}  name={item.name} Number={item.number} Password={item.password} Cvv2={item.cvv} Year={item.year} Month={item.month} Inventory={item.inventory} SelectCard={()=>SelectCard(item)}/>
        )
      })}

      
  </div>
    </div>
  );
}

export default EveryThing;

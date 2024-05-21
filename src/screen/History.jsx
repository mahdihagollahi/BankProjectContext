import React from 'react'
import HistoryCard from '../Commponent/HistoryCard';
export default function History({historyList}) {
  return (
    <div className='container '>
      <div className='container mb-9  w-[69%] h-auto ml-60 text-center mr-96  align-center justify-center mt-2  text-white p-10 px-10 border-solid border-2 rounded-2xl bg-white'>
      <div className="bg-white mt-5 flex flex-col justify-start items-end pb-14 ">
        {
            historyList.map((item)=>{
           return  item != null ? (<HistoryCard Number={item.number} name={item.name} cartCash={item.cartCash} negetivePrice={item.p}/>):null;
            })
        }
        </div>
      </div>
        
      
    </div>
  )
}

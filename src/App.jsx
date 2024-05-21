import React from 'react'
import EveryThing from './screen/EveryThing'

export default function App() {
  return (
    <div>
      <EveryThing/>
    </div>
  )
}



// import React, { useState } from 'react';

// const BankPaymentForm = () => {
//     const [cardNumber, setCardNumber] = useState('');
//     const [cardName, setCardName] = useState('');
//     const [cardCVV2, setCardCVV2] = useState('');
//     const [expiryDate, setExpiryDate] = useState('');
//     const [dynamicPassword, setDynamicPassword] = useState('');
//     const [transferAmount, setTransferAmount] = useState('');
//     const [transactionHistory, setTransactionHistory] = useState([]);
//     const defaultTransferAmount = 5000000;

//     const handlePayment = () => {
//         const newTransaction = {
//             cardNumber,
//             cardName,
//             transferAmount,
//             transferDate: new Date().toLocaleString()
//         };

//         // Deduct transferAmount from the default balance
//         const remainingBalance = defaultTransferAmount - parseInt(transferAmount) || defaultTransferAmount;

//         // Add the new transaction to the transaction history
//         setTransactionHistory([...transactionHistory, newTransaction]);

//         // Clear input fields after payment
//         setCardNumber('');
//         setCardName('');
//         setCardCVV2('');
//         setExpiryDate('');
//         setDynamicPassword('');
//         setTransferAmount('');

//         console.log('Remaining Balance:', remainingBalance);
//     };

//     return (
//         <div className="p-4 space-y-4">
//             <input type="text" placeholder="شماره کارت (۱۶ رقم)" maxLength="16" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="p-2 border" />

//             <input type="text" placeholder="نام و نام خانوادگی" value={cardName} onChange={(e) => setCardName(e.target.value)} className="p-2 border" />
//             <input type="text" placeholder="cvv2 (۳ رقم)" maxLength="3" value={cardCVV2} onChange={(e) => setCardCVV2(e.target.value)} className="p-2 border" />
//             <input type="text" placeholder="تاریخ انقضا" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} className="p-2 border" />
//             <input type="text" placeholder="رمز دوم پویا" value={dynamicPassword} onChange={(e) => setDynamicPassword(e.target.value)} className="p-2 border" />
//             <input type="text" placeholder="مبلغ انتقال" value={transferAmount} onChange={(e) => setTransferAmount(e.target.value)} className="p-2 border" />
//             <button onClick={handlePayment} className="p-2 bg-blue-500 text-white rounded">انجام پرداخت</button>

//             <h2>تاریخچه تراکنش‌ها:</h2>
//            <ul>
//     {transactionHistory.map((transaction, index) => (
//         <li key={index} className="p-2 border mt-2">
//             <div>شماره کارت: {transaction.cardNumber}</div>
//             <div>نام و نام خانوادگی: {transaction.cardName}</div>
//             <div>مبلغ انتقال: {transaction.transferAmount}</div>
//             <div>زمان انتقال: {transaction.transferDate}</div>
//         </li>
//     ))}
// </ul>
//         </div>
//     );
// };

// export default BankPaymentForm;
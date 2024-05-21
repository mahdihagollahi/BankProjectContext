import React, { useState } from "react";
import { IoCard } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

export default function InputCard({
  AddCard,
  name,
  setname,
  number,
  setnumber,
  cvv2,
  setcvv2,
  year,
  setyear,
  month,
  setmonth,
  password,
  setpassword,
  setinventory,
  inventory,
}) {

  // const [inputValue, setInputValue] = useState('');

  // const handleChange = (event) => {
  //   const regex = /(.{4})/g;
  //   const modifiedValue = event.target.value.replace(regex, '$1 ');
  //   setInputValue(modifiedValue);
  // };

  // const handleChange = (event) => {
  //   const inputValuee = event.target.value;
  //   const formattedValue = inputValuee
  //   .replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'')
  //     setnumber(formattedValue);
  // };
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    const { value } = event.target;
    // حذف تمام فاصله‌های قبلی
    const sanitizedValue = value.replace(/\s+/g, '');
    // افزودن فاصله بین هر چهار کاراکتر
    const formattedValue = sanitizedValue.replace(/(.{4})/g, '$1 ');
    setname(formattedValue.trim());
  };


  return (
    <div className="container">
      <div className="container w-[69%] h-auto ml-60 text-center mr-96  align-center justify-center mt-20  text-white p-10 px-10 border-solid border-2 rounded-2xl bg-white ">
        <div className="flex px-10">
          <IoCard className="w-7 h-7 bg-blue-500 text-white rounded-full " />
          <h2 className="text-2xl text-black">
            {" "}
            Acoin<span className=" text-black opacity-70">Pay</span>{" "}
          </h2>
        </div>

        <div className="flex gap-96 mt-10 text-black ">
          <div>
            <h2 className="text-bold text-lg mr-[143px]">CardNumber</h2>
            <p className="text-xs opacity-50">
              {" "}
              Enter the 16-digit card number on the Card
            </p>
          </div>

          <a className="flex  justify-between text-black ml-[30px]">
            <FaRegEdit className="mt-1 text-blue-500" />
            <p>Edit</p>
          </a>
        </div>

        <div>
          <div className="my-5 -ml-[60px]">
            <input
              style={{ color: "black" }}
              value={number}
              onChange={(e) => { handleChange
                setnumber(e.target.value)
               
              }}
              className=" text-black bg-gray-100 text-center  border border-gray-100  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-[64px] block w-9/12 p-2.5  dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="2412   -    7512   -   3412   -   3456"
              required
              maxLength='16'

            />
          </div>

          <div className="flex mt-10 text-right text-black">
            <div>
              <h2 className="text-bold text-lg mr-[128px]">CVV Number</h2>
              <p className="text-xs opacity-50">
                {" "}
                Enter the 3 or 4 digit number on the Card
              </p>
            </div>

            <div className="ml-20 mt-3">
              <input
                style={{ color: "black" }}
                value={cvv2}
                onChange={(e) => setcvv2(e.target.value)}
                placeholder="5643"
                type="password"
                maxLength='4'

                className=" text-center text-white bg-white px-[113px] py-3  dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
              />
            </div>
          </div>

          <div className="flex mt-10 text-right text-black">
            <div className="">
              <h2 className="text-bold text-lg mr-[111px]">Expiry Date</h2>
              <p className="text-xs opacity-50 dark:border-gray-200 mr-10">
                {" "}
                Enter the expiration the card{" "}
              </p>
            </div>

            <div className="flex gap-2 ml-[90px] text-black">
              <input
                style={{ color: "black" }}
                value={year}
                onChange={(e) => setyear(e.target.value)}
                placeholder="Y"
                type="text"
                maxLength='2'

                className=" text-center text-black bg-[#ffff] px-10 py-3   dark:focus:ring-blue-500 dark:focus:border-blue-500  border dark:border-gray-200  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
              />
              <span className="mt-2 text-bold ">/</span>
              <input
                style={{ color: "black" }}
                value={month}
                onChange={(e) => setmonth(e.target.value)}
                p
                laceholder="M"
                maxLength='2'
                type="text"
                className=" text-center text-black bg-[#ffff] px-10 py-3   dark:focus:ring-blue-500 dark:focus:border-blue-500  border dark:border-gray-200  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
              />
            </div>
          </div>

          <div className="flex mt-10 text-black">
            <div>
              <h2 className="text-bold text-lg mr-[80px]">Name</h2>
              <p className="text-xs opacity-50">Please enter u're name</p>
            </div>

            <div className="flex gap-2 ml-[187px]">
              <input
                style={{ color: "black" }}
                placeholder="Mahdi"
                value={name}
                onChange={(e) => setname(e.target.value)}
                type="text"
                maxLength="8"
                className=" text-center text-black bg-white px-[115px] py-3  dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
              />
            </div>
          </div>

          <div className="flex mt-10 text-black">
            <div>
              <h2 className="text-bold text-lg mr-[120px]">Password</h2>
              <p className="text-xs opacity-50">
                {" "}
                Please enter u're dynomic password{" "}
              </p>
            </div>

            <div className="flex gap-2 ml-[113px]">
              <input
                style={{ color: "black" }}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="xxxx"
                type="password"
                maxLength="4"
                className=" text-center text-black bg-white px-[115px] py-3  dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
              />
            </div>
          </div>

          <div className="flex mt-10 text-black">
            <div>
              <h2 className="text-bold text-lg mr-[120px]">Inventory</h2>
              <p className="text-xs opacity-50 mr-11">
                {" "}
                Please enter u're inventory
              </p>
            </div>

            <div className="flex gap-2 ml-[113px]">
              <input
                style={{ color: "black" }}
                value={inventory}
                onChange={(e) => setinventory(e.target.value)}
                placeholder="xxxxxx"
                type="number"
                maxLength='12'
                className=" text-center ml-3  text-black bg-white px-[115px] py-3  dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  border border-gray-300  text-sm rounded-lg  block"
              />
            </div>
          </div>

          <div className="mt-10">
            <button
            href="/Transaction"
              type="sumbit"
              onClick={() =>
                AddCard(name, number, password, cvv2, year, month, inventory)
              }
              className="text-blue-700 w-9/12  hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-80 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              {" "}
              AddCard{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

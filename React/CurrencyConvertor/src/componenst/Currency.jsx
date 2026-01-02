import React, { useState } from "react";
import CountryData from "../assets/CountryData.json";

const Currency = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  console.log(CountryData);
  return (
    <>
      <div className="bg-amber-50 h-screen p-5">
        <div className="w-3xl bg-white rounded shadow border p-3 mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex gap-3 border rounded px-3">
              {from && (
                <img
                  src={`https://flagsapi.com/${from.split("")[1]}/flat/64.png`}
                  alt=""
                />
              )}
              <select
                name="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="border p-3  rounded  overflow-hidden w-full  focus:outline-none"
              >
                <option>--Select Country--</option>
                {CountryData.map((country, idx) => (
                  <option
                    value={country.currencyCode + " " + country.countryCode}
                    key={idx}
                  >
                    {country.CountryName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                name="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="border p-3  rounded  overflow-hidden"
              >
                <option>--Select Country--</option>
                {CountryData.map((country, idx) => (
                  <option
                    value={country.currencyCode + " " + country.countryCode}
                    key={idx}
                  >
                    {country.CountryName}
                  </option>
                ))}
              </select>
            </div>


            <div>
                <label htmlFor="amt">Amount</label>
                <input type="text" name=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;

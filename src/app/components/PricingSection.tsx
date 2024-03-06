"use client";
import React, { ChangeEventHandler, useContext, useEffect } from "react";
import Switcher from "../../components/Switcher";
import { getCurrentRates, getCurrentSymbol } from "../../services/exchangeRate";
import PricingContext from "../providers/PricingProviders";

export default function PricingSection() {
  const {
    selectedCurrency,
    setSelectedCurrency,
    setSelectedSymbol,
    setCurrencyChange,
    currencyChange,
  } = useContext(PricingContext);

  const currencyTypeChange = (isChecked: boolean) => {
    setCurrencyChange(isChecked);
  };

  const handleCurrencyChange: ChangeEventHandler<HTMLSelectElement> = (ev) => {
    const val = ev.target.value;
    setSelectedCurrency(val);
  };

  useEffect(() => {
    updateSymbol();
  }, [selectedCurrency]);

  const updateSymbol = () => {
    const symbol = getCurrentSymbol(selectedCurrency);
    setSelectedSymbol(symbol);
  };

  return (
    <div className="wrapper pricing-section">
      {/* Pricing Selection Section */}
      <div className="pricing-change-section">
        <Switcher
          label="Save with Yearly"
          size="small"
          onChange={currencyTypeChange}
          value={currencyChange}
        ></Switcher>
        <select
          id="currency-selector"
          name="currency-selector"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
        >
          {getCurrentRates().map((rate) => (
            <option key={rate.name} value={rate.name}>
              {rate.symbol} {rate.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

"use client";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type ContextValueType = {
  selectedCurrency: string;
  selectedSymbol: string;
  currentRates: { [key: string]: number };
  currencyChange: boolean;
  setSelectedCurrency: Dispatch<SetStateAction<string>>;
  setSelectedSymbol: Dispatch<SetStateAction<string>>;
  setRates: Dispatch<SetStateAction<{ [key: string]: number }>>;
  setCurrencyChange: Dispatch<SetStateAction<boolean>>;
};
// create context
const PricingContext = createContext<ContextValueType>({
  selectedCurrency: "USD",
  selectedSymbol: "$",
  currentRates: {},
  currencyChange: false,
  setSelectedCurrency: () => {},
  setSelectedSymbol: () => {},
  setRates: () => {},
  setCurrencyChange: () => {},
});

// PricingProviders component
export function PricingProviders({ children, rates }: any) {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedSymbol, setSelectedSymbol] = useState("$");
  const [currentRates, setRates] = useState<{ [key: string]: number }>(rates);
  const [currencyChange, setCurrencyChange] = useState<boolean>(false);

  // Value to be provided to the context
  const contextValue: ContextValueType = {
    selectedCurrency,
    selectedSymbol,
    currentRates,
    currencyChange,
    setSelectedCurrency,
    setSelectedSymbol,
    setRates,
    setCurrencyChange,
  };

  return (
    <PricingContext.Provider value={contextValue}>
      {children}
    </PricingContext.Provider>
  );
}

export default PricingContext;

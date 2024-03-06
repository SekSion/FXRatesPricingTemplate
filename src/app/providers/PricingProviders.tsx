"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  useCallback,
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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const period = searchParams.get("period");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedSymbol, setSelectedSymbol] = useState("$");
  const [currentRates, setRates] = useState<{ [key: string]: number }>(rates);
  const [currencyChange, setCurrencyChange] = useState<boolean>(
    period == "yearly" ?? false
  );
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

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    router.push(
      pathname +
        "?" +
        createQueryString("period", currencyChange ? "yearly" : "monthly")
    );
  }, [currencyChange]);

  return (
    <PricingContext.Provider value={contextValue}>
      {children}
    </PricingContext.Provider>
  );
}

export default PricingContext;

"use client";

import { ChangeEventHandler, useEffect, useState } from "react";
import Switcher from "../components/Switcher";
import {
  getCurrencies,
  getCurrentRates,
  getCurrentSymbol,
  getRateCurrency,
} from "../services/exchangeRate";

export default function Home() {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
  const [selectedSymbol, setSelectedSymbol] = useState<string>("$");
  const [rates, setRates] = useState([]);
  const currencyChange = (isChecked: boolean) => {
    console.log("test", isChecked);
  };

  const handleCurrencyChange: ChangeEventHandler<HTMLSelectElement> = (ev) => {
    console.log("test", ev.target.value);
    const val = ev.target.value;
    setSelectedCurrency(val);
  };

  const getRateCurrencyByUSD = async () => {
    const res = await getRateCurrency();
    setRates(res.rates);
  };

  const updateSymbol = async () => {
    const symbol = getCurrentSymbol(selectedCurrency);
    setSelectedSymbol(symbol);
  };

  const updateValueByRate = (value: string) => {
    //to do implement updateVal
  };

  useEffect(() => {
    getRateCurrencyByUSD();
  }, []);

  useEffect(() => {
    console.log(rates);
    updateSymbol();
  }, [selectedCurrency]);

  return (
    <main>
      <div className="wrapper pricing-section">
        {/* Pricing Selection Section */}
        <div className="pricing-change-section">
          <Switcher
            label="Save with Yearly"
            size="small"
            onChange={currencyChange}
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
        <div className="pricing-grid">
          <div className="grid">
            <div className="title grid-spacing">
              <h2>Basic</h2>
              <p>Limited Access</p>
            </div>
            <div className="price">
              <div className="value  grid-spacing">
                <span>Free</span>
              </div>
              <div className="type">
                <span className="">/month </span>
                <span className="">billed annually</span>
              </div>
            </div>
            <div className="action grid-spacing">
              <a className="action-link">
                <span>Get Started</span>
              </a>
            </div>
            <ul>
              <li>Every first chapter free</li>
              <li>Free professional profile and job board access</li>
              <li>Upgrade to earn certificates</li>
            </ul>
          </div>
          <div className="grid highlighted">
            <div className="special-tag">Most Popular</div>
            <div className="title grid-spacing">
              <h2>Premium</h2>
              <p>For Individuals</p>
            </div>
            <div className="price">
              <div className="value grid-spacing">
                <span className="symbol">{selectedSymbol}</span>
                <span className="pre-decimal">42</span>
                <span className="after-decimal"></span>
              </div>
              <div className="type ">
                <span className="">/month</span>
                <span className="">billed annually</span>
              </div>
            </div>
            <div className="action grid-spacing">
              <a className="action-link highlight">
                <span>Subscribe Now</span>
              </a>
            </div>
            <ul>
              <li>Access our full content library</li>
              <li>All certificates and projects</li>
              <li>Go from zero to job ready</li>
              <li>Our top Python, SQL, Tableau, Power BI and R programs</li>
              <li>More ways to learn to code</li>
            </ul>
          </div>

          <div className="grid special">
            <div className="special-tag">Special Price</div>
            <div className="discount">
              <span>{selectedSymbol}</span>
              <span>27</span>
            </div>
            <div className="title grid-spacing">
              <h2>Teams</h2>
              <p>For teams of 2 and up</p>
            </div>
            <div className="price ">
              <div className="value  grid-spacing">
                <span className="symbol">{selectedSymbol}</span>
                <span className="pre-decimal">13</span>
                <span className="after-decimal">.25</span>
              </div>
              <div className="type ">
                <span className="">per user /month </span>
                <span className="">billed annually</span>
              </div>
            </div>
            <div className="action grid-spacing">
              <a className="action-link">
                <span>Set Up a Team</span>
              </a>
            </div>
            <p className="grid-spacing">Everything in Premium plus:</p>
            <ul>
              <li>Manage your group</li>
              <li>View learning activity and track progress</li>
              <li>License management tools</li>
            </ul>
            <a className="grid-spacing" href="#">
              <span>Free Teams plan for educators</span>
            </a>
          </div>

          <div className="grid enterprise">
            <div className="title grid-spacing">
              <h2>Enterprise</h2>
              <p>Bespoke Solutions</p>
            </div>
            <div className="price ">
              <div className="value  grid-spacing">
                <span>Contact sales for pricing</span>
              </div>
            </div>
            <div className="action  grid-spacing">
              <a className="action-link">
                <span>Request a Demo</span>
              </a>
            </div>
            <p className="grid-spacing">Everything in Teams plus:</p>
            <ul>
              <li>Personalized and adaptive learning paths for employees</li>
              <li>Advanced analytics and reporting integrations</li>
              <li>Single Sign-On (SSO) through Okta, Auth0, Azure and more</li>
              <li>LMS/LXP integrations</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

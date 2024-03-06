"use client";

import { useContext } from "react";
import PricingContext from "../providers/PricingProviders";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function GridSection() {
  const { selectedCurrency, currentRates, selectedSymbol, currencyChange } =
    useContext(PricingContext);

  const updateValueByRate = (value: string, decimals: number = 0) => {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const result = currentRates[selectedCurrency] * parsedValue;
      return String(result.toFixed(decimals)); // Ensure result is formatted with 2 decimals
    } else {
      return "NaN"; // Handle invalid input
    }
  };

  const showValue = (value: string) => {
    const val = updateValueByRate(value, 2);
    const [preDecimal, afterDecimal] = val.split(".");
    return (
      <div className="value">
        <span className="symbol">{selectedSymbol}</span>
        <span className="pre-decimal">{preDecimal}</span>
        {afterDecimal && <span className="after-decimal">.{afterDecimal}</span>}
      </div>
    );
  };

  return (
    <div className="pricing-grid">
      <div className="grid">
        <div className="title grid-spacing">
          <h2>Basic</h2>
          <p>Limited Access</p>
        </div>
        <div className="price">
          <div className="value ">
            <span>Free</span>
          </div>
          <div className="type">
            {/* <span className="">/month </span>
            <span className="">billed annually</span> */}
          </div>
        </div>
        <div className="action grid-spacing">
          <a className="action-link">
            <span>Get Started</span>
          </a>
        </div>
        <ul>
          <li>
            <Icon
              fontSize={18}
              className="list-icon"
              icon="mingcute:check-fill"
            />
            Every first chapter free
          </li>
          <li>
            <Icon
              fontSize={18}
              className="list-icon"
              icon="mingcute:check-fill"
            />
            Free professional profile and job board access
          </li>
          <li>
            <Icon
              fontSize={18}
              className="list-icon"
              icon="mingcute:check-fill"
            />
            Upgrade to earn certificates
          </li>
        </ul>
      </div>
      <div className="grid highlighted">
        <div className="special-tag">Most Popular</div>
        {currencyChange && (
          <div className="discount">
            <span>{selectedSymbol}</span>
            <span>{updateValueByRate("27")}</span>
          </div>
        )}

        <div className="title grid-spacing">
          <h2>Premium</h2>
          <p>For Individuals</p>
        </div>
        <div className="price">
          <div className="value">
            {currencyChange ? showValue("13.25") : showValue("42.22")}
          </div>
          <div className="type ">
            <span className="">/month</span>
            {currencyChange && <span className="">billed annually</span>}
          </div>
        </div>
        <div className="action grid-spacing">
          <a className="action-link highlight">
            <span>Subscribe Now</span>
          </a>
        </div>
        <ul>
          <li>
            <Icon
              fontSize={18}
              className="list-icon"
              icon="mingcute:check-fill"
            />
            Access our full content library
          </li>
          <li>
            <Icon
              fontSize={18}
              className="list-icon"
              icon="mingcute:check-fill"
            />
            All certificates and projects
          </li>
          <li>
            <Icon
              fontSize={18}
              className="list-icon"
              icon="mingcute:check-fill"
            />
            Go from zero to job ready
          </li>
          <li>
            <Icon
              fontSize={18}
              className="list-icon"
              icon="mingcute:check-fill"
            />
            Our top Python, SQL, Tableau, Power BI and R programs
          </li>
          <li>
            <Icon
              fontSize={18}
              className="list-icon"
              icon="mingcute:check-fill"
            />
            More ways to learn to code
          </li>
        </ul>
      </div>

      <div className="grid special">
        <div className="special-tag">Special Price</div>
        <div className="discount">
          <span>{selectedSymbol}</span>
          <span>{updateValueByRate("27")}</span>
        </div>
        <div className="title grid-spacing">
          <h2>Teams</h2>
          <p>For teams of 2 and up</p>
        </div>
        <div className="price ">
          <div className="value ">{showValue("13.25")}</div>
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
          <li>
            <Icon
              fontSize={18}
              className="list-icon"
              icon="mingcute:check-fill"
            />
            Manage your group
          </li>
          <li>
            <Icon
              fontSize={18}
              className="list-icon"
              icon="mingcute:check-fill"
            />
            View learning activity and track progress
          </li>
          <li>
            <Icon
              fontSize={18}
              className="list-icon"
              icon="mingcute:check-fill"
            />
            License management tools
          </li>
        </ul>
        <a className="custom-link grid-spacing" href="#">
          <span>Free Teams plan for educators</span>
        </a>
      </div>

      <div className="grid enterprise">
        <div className="title grid-spacing">
          <h2>Enterprise</h2>
          <p>Bespoke Solutions</p>
        </div>
        <div className="price ">
          <div className="value ">
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
          <li>
            <Icon
              fontSize={18}
              className="list-icon"
              icon="mingcute:check-fill"
            />
            Personalized and adaptive learning paths for employees
          </li>
          <li>
            <Icon
              fontSize={18}
              className="list-icon"
              icon="mingcute:check-fill"
            />
            Advanced analytics and reporting integrations
          </li>
          <li>
            <Icon
              fontSize={18}
              className="list-icon"
              icon="mingcute:check-fill"
            />
            Single Sign-On (SSO) through Okta, Auth0, Azure and more
          </li>
          <li>
            <Icon
              fontSize={18}
              className="list-icon"
              icon="mingcute:check-fill"
            />
            LMS/LXP integrations
          </li>
        </ul>
      </div>
    </div>
  );
}

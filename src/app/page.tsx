import { getRateCurrency } from "../services/exchangeRate";
import GridSection from "./components/GridSection";
import PricingSection from "./components/PricingSection";
import { PricingProviders } from "./providers/PricingProviders";

export default async function Home() {
  const rates = await getRateCurrency();

  return (
    <main>
      <div className="wrapper pricing-section">
        <PricingProviders {...rates}>
          <PricingSection></PricingSection>
          <GridSection></GridSection>
        </PricingProviders>
      </div>
    </main>
  );
}

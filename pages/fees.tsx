import Calculate from '../components/fees/calculate';
import Info from '../components/fees/info';

const Fees = () => {
  return (
    <>
      <Calculate />
      <Info/>
      {/* //TODO: TrustPilot widget (requires, API access) */}
    </>
  );
};

export default Fees;

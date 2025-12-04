import MoneyFly from './MoneyFly';
import MoneyRain from './MoneyRain';
import MoneyPops from './MoneyPops';

export default function MoneyAnimation() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <MoneyFly />
        <MoneyRain />
      </div>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        <MoneyPops />
      </div>
    </>
  );
}

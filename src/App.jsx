import WShInfo from "./components/ex1_2.jsx";
import PlayInfo from "./components/ex1_1.jsx";
import './App.css'
import ButtonCounter from "./components/ex2";
import ButtonCounterEx3 from "./components/ex3_1";
import PlusButtons from "./components/ex4_1";

function App() {
  const ex1_p1 = {
      title: "Гамлет",
      genre: "Трагедія",
      year: 1603
  };

  const ex1_p2 = {
      title: "Макбет",
      genre: "Трагедія",
      year: 1606
  }

    return (
    <>
        <div className="EX1">
            <WShInfo/>
            <PlayInfo {...ex1_p1}/>
            <PlayInfo {...ex1_p2}/>
        </div>
        <div className="EX2">
            <ButtonCounter/>
        </div><br/>
        <div className="EX3">
            <ButtonCounterEx3/>
        </div><br/>
        <div className="EX4">
            <PlusButtons/>
        </div>
    </>
  )
}

export default App

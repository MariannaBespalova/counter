import {useState} from "react";
import {Tablo} from "./Tablo";
import {Button} from "./Button";


export default function Counter () {
  const [number, setNumber] = useState(0)
  const maxValue = 5;
  const minValue = 0;

  const bntOnClickAdd = () => {
    if (number <= maxValue) {
      setNumber(number + 1)
    }
  }

  const bntOnClickReset = () => {
    setNumber(minValue)
  }

  const disabledAdd = () => {
    return number === maxValue;
  }
  const isDisabledBtn = disabledAdd()


  const disabledReset = () => {
    return number === 0;
  }
  const isDisabledBtnReset = disabledReset()


  return (
    <div className='wrapper'>
      <Tablo number={number} maxValue={maxValue}/>
      <div className="button-wrapper">
        <Button callback={bntOnClickAdd} btnName='ADD' isDisabled={isDisabledBtn}/>
        <Button callback={bntOnClickReset} btnName='RESET' isDisabled={isDisabledBtnReset}/>
      </div>
    </div>
  )
}
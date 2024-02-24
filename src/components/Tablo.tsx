type TabloProps = {
  number: number
  maxValue: number
}

export function Tablo(props:TabloProps) {

  return (
    <div className="tablo">
      <div className={props.number === props.maxValue ? "number-max number" : "number"}>{props.number}</div>
    </div>)
}
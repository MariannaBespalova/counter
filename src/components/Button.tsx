
type ButtonPropsType = {
  btnName:string
  callback:() => void
  isDisabled?: boolean
  className?: string
}

export function Button (props: ButtonPropsType) {
  const btnOnClickHandler = () => {
    props.callback()
  }
  return (
    <>
      <button onClick={btnOnClickHandler} disabled={props.isDisabled} className="btn">{props.btnName}</button>
    </>
  )
}
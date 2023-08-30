
export default function Input({type,label,state ,changHandler, name}) {
     
   
  return (
            <input
              type={type}
              name={name}
              className="form-control"
              id="floatingInput"
              placeholder={label}
              value={state}
              onChange={e=>changHandler(e)}
            />
            
  )
}

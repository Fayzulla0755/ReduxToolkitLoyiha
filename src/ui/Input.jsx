
export default function Input({type,label,state ,changHandler}) {
     
   
  return (
            <input
              type={type}
              className="form-control"
              id="floatingInput"
              placeholder={label}
              value={state}
              onChange={()=>    changHandler}
            />
            
  )
}

import React , {useState} from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";
export const Loader = () => {
    let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
 
  return (
    <div style={{marginTop:'170px'}}>
 <div className="sweet-loading text-center">
      

      <ScaleLoader
        color='#000'
        loading={loading}
        css=''
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    </div>
  )
}

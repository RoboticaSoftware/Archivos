import {Cover, FormPQRSD} from "../../../Components"
import { ToastContainer} from 'react-toastify';

export function Radicar() {

  return (
    <>
        <Cover  title="RADICAR"/>
        <div className="container_general">
          <FormPQRSD />
        </div>
        <ToastContainer />
        
    </>
  )
}

import {FormLogin} from "../../../Components"
import "./Login.scss"

export function Login () {
    return(
        <>
            <div className="background_login">
                <div className="box_main_login">
                    <div className="box_logo_login">
                        <img src="/logo_AE.png" className='logo_AE_login'/>
                        <p className="text_login"><strong>Transformación</strong> Digital <strong>Empresarial</strong></p>
                    </div>
                    <div className="box_form_login">
                        <FormLogin />
                    </div>
                </div>                
            </div>
            
        </>
    )
}
import { GoLaw } from "react-icons/go";
import {Cover, ListItems} from "../../../Components";


import "./Transparencia.scss"

export function Transparencia() {
  return (
    <>
        <Cover title="TRANSPARENCIA Y ACCESO A LA INFORMACIÓN" />
        <div className="container_icons_transparencia">
          <div className="container_icon_transparencia">
            <GoLaw size={100} />
            <a className="text_icon_transparencia" href="">
              <h2 className="subtitle_general"><strong>Ley 1712 de 2014</strong></h2>
            </a>
          </div>
          <div className="container_icon_transparencia">
            <GoLaw size={100} />
            <a className="text_icon_transparencia" href="">
              <h2 className="subtitle_general"><strong>Decreto 1081 de 2015</strong></h2>
            </a>
          </div>
          <div className="container_icon_transparencia">
            <GoLaw size={100}/>
            <a className="text_icon_transparencia" href="">
              <h2 className="subtitle_general"><strong>Resolución 3564 de 2015</strong></h2>
            </a>
          </div>
        </div>
        <div className="container_items_transparencia">
          <ListItems />
        </div>
        
    </>
  )
}

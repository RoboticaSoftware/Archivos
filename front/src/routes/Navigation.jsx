import {BrowserRouter as Router,Routes,Route  } from "react-router-dom"
import {map} from "lodash"; // cumple la función similar al map, pero me protege contra posibles errores
import routes from "./routes";

export function Navigation () {
    return (
        <Router>
            
            <Routes>
                {
                    map(routes, (route, index)=>(
                        <Route
                            key={index}
                            path={route.path}
                            element = {
                                <route.layout>
                                    <route.component/>
                                </route.layout>
                            }
                        />
                    ))
                }
            </Routes>
        </Router>
    );
}
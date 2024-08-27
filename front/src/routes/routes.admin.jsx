import {AdminLayout} from "../layouts" // importamos los layouts 
import {Login} from "../pages" // importamos las paginas 

const routesAdmin = [
    // definimos la primera ruta dentro de un objeto {}
    {
        path: "/login",
        layout: AdminLayout,
        component: Login
    }
];

export default routesAdmin;
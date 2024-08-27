import {AdminLayout} from "../layouts" // importamos los layouts 
import {HomeAdmin,
    Nosotros,
    Servicios,
    Innovacion,
    Contratos,
    Transparencia,
    Contacto,
    Participa,
    Radicar,
    Home} from "../pages" // importamos las paginas 

const routesClient = [
    // definimos la primera ruta dentro de un objeto {}
    {
        path: "/",
        layout: AdminLayout,
        component:Home
    },
    {
        path:"/nosotros",
        layout:AdminLayout,
        component:Nosotros
    },
    {
        path:"/servicios",
        layout:AdminLayout,
        component:Servicios
    },
    {
        path:"/innovacion",
        layout:AdminLayout,
        component:Innovacion
    },
    {
        path:"/contratacion",
        layout:AdminLayout,
        component:Contratos
    },
    {
        path:"/transparencia",
        layout:AdminLayout,
        component:Transparencia
    },
    {
        path:"/contacto",
        layout:AdminLayout,
        component:Contacto
    },
    {
        path:"/participa",
        layout:AdminLayout,
        component:Participa
    },
    {
        path:"/radicar",
        layout:AdminLayout,
        component:Radicar
    }
];

export default routesClient;



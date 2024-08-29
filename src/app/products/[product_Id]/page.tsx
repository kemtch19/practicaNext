import { Metadata } from "next";

type Props={
    params:{
        product_Id: string;
    }
}

export const generateMetada=({params, }:Props):Metadata=>{
    return {
        title: `Producto ${params.product_Id}`
    }
}

export default function ProductDetail({params, }:Props){ /* son los parametros que vienen desde la URL, tira error es porque estypescript y hay que especificar el tipo de dato pero aún así corre */
    return <h1>Producto {params.product_Id}</h1>
}
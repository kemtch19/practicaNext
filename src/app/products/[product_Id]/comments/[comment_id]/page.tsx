export default function commentDetail(
    {params}:{ /* Este atributo me va a contener a todo lo que le mandemos por la URL */
        params:{
            product_Id:string,
            comment_id:string;
        }
    }
){
    return <h1>Producto #{params.product_Id}  comentario # {params.comment_id}</h1>
}
import { useParams } from "react-router-dom"

function ProductDetails() {

    const {id}=useParams()
    return (
        <div>ProdutDetails{id}</div>
    )
}

export default ProductDetails

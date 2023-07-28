// import { createContext, useEffect, useState } from "react"
// import { GetPtoductsListAPI } from '../api/Products/productListAPI'


// export const Context = createContext(null)

// const ProductContext = ({ childern }) => {
//     const [productsList, setProductsList] = useState([])
//     const [loading, setLoading] = useState(false)
//     useEffect(() => {
//         const ProductListAPI = () => {
//             GetPtoductsListAPI().then((res) => {
//                 if (res) {
//                     setLoading(false),
//                         setProductsList(res.data.products);
//                 }
//             }


//             ).catch((error) => { console.log(error) })
//         }
//         ProductListAPI()
//     }, [])
  

//     return (
//         <Context.Provider value={{productsList,loading}}>
//             {childern}
//         </Context.Provider>
//     )
// }
// export default ProductContext
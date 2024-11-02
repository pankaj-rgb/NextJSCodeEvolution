export const generateMetadata=async ({params})=>{
const title=await new Promise(resolve=>{
    setTimeout(()=>{
        resolve(`iphone ${params.productId}` )
    },100)
}) 
    return {
        title:  `Product ${title}`
    }
}

export default function ProductDetails({params}){
    return <h1> Details about product {params.productId}</h1>
}
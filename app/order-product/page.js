'use client'
import { useRouter } from "next/navigation";

export default function OrderProduct(){
    const router=useRouter();
    const handleClick=()=>{
        console.log("placing your order");
        router.push('/');
        //forward() , replace() , back()  some of the router function 
    }
    return (
        <>
        <h2>Order Product</h2>
        <button onClick={handleClick}>Place order</button>
        </>
    )
}
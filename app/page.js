import Link from "next/link";

export default function Home(){
    return (
        <>
        <h1>Welcome Home</h1>
        <Link href="/about">Blog</Link>
        <br></br>
        <Link href="/product">Products</Link>
        </>
    )
}
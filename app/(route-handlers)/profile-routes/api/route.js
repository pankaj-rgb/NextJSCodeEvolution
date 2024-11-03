import { headers,cookies } from "next/headers";


export async function GET(request){
    const requestHeaders=new Headers(request.headers);
    const headerList=headers()
    cookies().set("resultPerPage","20");
    const theme=request.cookies.get("theme");
    console.log('theme ',theme);
    console.log(cookies().get('resultPerPage'))
    console.log(requestHeaders.get('Authorization'));
    console.log(headerList.get('Authorization'))
    return new Response('<h1>Profile Routes API</h1>',{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=dark"
        }
    });
}


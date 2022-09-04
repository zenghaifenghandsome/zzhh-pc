import axios from "axios";

let baseURL = 'http://localhost:9000'
const musicUrl='http://101.35.101.200:3000'
const cookie="NMTID=00OCi7M1t6BpKAuCEH4lK-Jr8NXYuEAAAGAqO2Ftg; Max-Age=315360000; Expires=Thu, 06 May 2032 13:06:20 GMT; Path=/;;MUSIC_A_T=1601877509256;" +
    " Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; Path=/wapi/clientlog;;MUSIC_A_T=1601877509256; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT;" +
    " Path=/neapi/feedback;;MUSIC_A_T=1601877509256; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; Path=/api/clientlog;;__remember_me=true; Max-Age=1296000; " +
    "Expires=Tue, 24 May 2022 13:06:20 GMT; Path=/;;MUSIC_A_T=1601877509256; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; Path=/neapi/clientlog;;MUSIC_R_T=1601877569490;" +
    " Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; Path=/eapi/feedback;;MUSIC_A_T=1601877509256; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; Path=/weapi/clientlog;;" +
    "MUSIC_R_T=1601877569490; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; Path=/api/feedback;;MUSIC_R_T=1601877569490; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; " +
    "Path=/neapi/clientlog;;MUSIC_R_T=1601877569490; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; Path=/wapi/feedback;;MUSIC_A_T=1601877509256; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; " +
    "Path=/wapi/feedback;;MUSIC_A_T=1601877509256; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; Path=/weapi/feedback;;MUSIC_R_T=1601877569490; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT;" +
    " Path=/api/clientlog;;MUSIC_R_T=1601877569490; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; Path=/weapi/feedback;;MUSIC_A_T=1601877509256; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT;" +
    " Path=/openapi/clientlog;;MUSIC_A_T=1601877509256; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; Path=/eapi/feedback;;" +
    "MUSIC_U=0e4133e728c8e186774b4ed1517231464755f534cb154fec2213b89729a1cb8f519e07624a9f0053ec5be27974f8bd2680cd06c96e431534b3bb6b17294dc3718cd8b1cc07a9da0e7a561ba977ae766d; Max-Age=1296000; Expires=Tue, 24 May 2022 13:06:20 GMT;" +
    " Path=/;;MUSIC_A_T=1601877509256; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; Path=/api/feedback;;MUSIC_R_T=1601877569490; " +
    "Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; Path=/neapi/feedback;;__csrf=d259d19e7f1c08da8e779ae25fd65efb; Max-Age=1296010; Expires=Tue, 24 May 2022 13:06:30 GMT; Path=/;;MUSIC_SNS=; Max-Age=0;" +
    " Expires=Mon, 09 May 2022 13:06:20 GMT; Path=/;MUSIC_R_T=1601877569490; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; Path=/eapi/clientlog;;MUSIC_R_T=1601877569490; Max-Age=2147483647; " +
    "Expires=Sat, 27 May 2090 16:20:27 GMT; Path=/openapi/clientlog;;MUSIC_A_T=1601877509256; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; " +
    "Path=/eapi/clientlog;;MUSIC_R_T=1601877569490; Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; Path=/wapi/clientlog;;MUSIC_R_T=1601877569490; " +
    "Max-Age=2147483647; Expires=Sat, 27 May 2090 16:20:27 GMT; Path=/weapi/clientlog;"



const ajax = (url:string,data:object={},method:string="GET")=>{
    if(method==="POST") axios.post(url,data)
    return axios.get(url,{params:data})
}

export const api_getAllOkBc = () => ajax(baseURL+"/biancheng/okAllBiancheng")

export const api_getAllOkBlogs= ()=> ajax(baseURL+"/blog/allOkBlog")

export const api_getThisBlog = (blogID:any) => ajax(baseURL+'/blog/blogArticle',{"blogID":blogID})

export const api_getplaylistinfo = (id:any) => ajax(musicUrl+'/playlist/detail',{"id":id,"cookie":cookie})
export const api_getplaylist = (id:any) => ajax(musicUrl+'/playlist/track/all',{"id":id,"cookie":cookie})

//music
export const api_getMusicBanner = () => ajax(musicUrl+'/banner')
export const api_getBianChengDetail = (id:any) => ajax(baseURL+'/biancheng/getOnlybiancheng',{"id":id})
export const api_getSongFormList = (data:any) => ajax(musicUrl+'/personalized',{"limit":data})
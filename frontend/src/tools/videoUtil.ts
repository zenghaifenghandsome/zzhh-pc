
import parser from "fast-xml-parser";
import { api_videoProxy } from "./ajax";

const xmlConfig={
    trimValues:true,
    textNodeName:"_t",
    ignoreAttributes:false,
    attributeNamePrefix:"_",
    parseAttributeValue:true
}

//获取资源分类和所有资源的总数，分页等信息
export const getSource = (url:string):any => {
    api_videoProxy(url).then((req:any)=>{
        const data = req.data.data
        console.log(req)
        const json = new parser.XMLParser().parse(data)
        console.log(json)
    }).catch((err:Error)=>{console.log(err)})
    
}
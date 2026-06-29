import React from "react";
import Layout from "../../../components/Layout";
import InnerHeroBanner from "../../../components/InnerHeroBanner";
import { FaDownload } from "react-icons/fa";
import yogaKids from "../../../assets/images/resourcerepository/resource-repository-img1.png";
import healthyFood from "../../../assets/images/resourcerepository/resource-repository-img2.png";

const resources =[
    {
        id:1,
        image:yogaKids,
        title:"Yoga for Kids"
    },
    {
        id:2,
        image:healthyFood,
        title:"Healthy Food"
    }
]

const ResourceRepository = () =>{

    const downloadImage = async(imageUrl, fileName)=>{
        const response = await fetch(imageUrl);
        const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    };

    return(
       <Layout>
        <InnerHeroBanner title="Resource Repository"/>
        <div>
            <div className="max-w-6xl mx-auto py-10">
                <div className="grid md:grid-cols-2 gap-8">
                    {resources.map((item)=>(
                        <div key={item.id}>
                            <div  className="border border-gray-300 p-3 bg-white">
                            <img 
                                src={item.image}
                                alt={item.title}
                                className="w-full"
                            />
                            </div>
                            <div className="flex justify-end mt-2">
                                <button
                                onClick={()=>
                                    downloadImage(item.image, `${item.title}.png`)
                                }  className="flex items-center gap-2 text-md font-normal">
                                    <FaDownload/>
                                    Download
                                </button>
                            </div>
                        </div>
                       
                    ))}
                </div>
                    <div className="bg-[#0089d0] text-white text-center py-2 mt-6 text-xl font-semibold rounded-[5px]">                        
		To access and read more such amazing content, kindly Login using the username and password provided to you.
	
                    </div>
 </div>
            
        </div>
       </Layout>
    )
}

export default ResourceRepository;
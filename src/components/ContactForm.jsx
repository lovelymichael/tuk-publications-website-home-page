import React from "react";

const ContactForm = () =>{
    return(
        <div className="bg-gray-100 border border-[#e7e7e7] p-5">
            <form className="space-y-4">
                <div>
                    <label className="font-bold text-lg text-[#333]">Name:</label>
                    <input type="text" placeholder="Name *"
                    className="w-full bg-white border border-blue-500 px-4 py-2 mt-1 rounded rounded-[5px]"/>
                </div>

                <div>
                    <label className="font-bold text-lg text-[#333]">Email:</label>
                    <input type="email" placeholder="Email *"
                    className="w-full bg-white border border-blue-500 px-4 py-2 mt-1 rounded rounded-[5px]"/>
                </div>

                <div>
                    <label className="font-bold text-lg text-[#333]">Phone:</label>
                    <input type="text" placeholder="Phone *"
                    className="w-full bg-white border border-blue-500 px-4 py-2 mt-1 rounded rounded-[5px]"/>
                </div>

                <div>
                    <label className="font-bold text-lg text-[#333]">Query:</label>
                    <textarea type="text" placeholder="Add Your query *"
                    className="w-full bg-white border border-blue-500 px-4 py-2 mt-1 h-[100px] rounded rounded-[5px]">
                    </textarea>
                </div>

                <div className="text-center">
                    <button type="submit" className="bg-[#0065b5] font-bold text-lg text-white px-8 py-2 rounded">
                    Submit
                </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;
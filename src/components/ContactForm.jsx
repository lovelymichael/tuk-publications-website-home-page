import React, { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;

    const inputValue = 
    name === "phone"
    ? value.replace(/\D/g, "")
    : value;

    setFormData({
      ...formData,
      [name]:inputValue,
    });
    setError({
      ...error,
      [name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.query.trim()) {
      newErrors.query = "Query is required";
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");

    if(!validate()) return;

    setLoading(true);

   try{
    const response = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(formData),
    });

    if(!response.ok){
      throw new Error("Failed to Submit");
    }

    const data = await response.json();

    console.log(data);

    setSuccess("Thank you! Your message has been sent successfully.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      query: ""
    });

    setError({});
  }
  catch(error){
    console.log(error);
    alert("Something went wrong");
  }finally{
    setLoading(false);
  }

  };

  return (
    <div className="bg-gray-100 border border-[#e7e7e7] p-5">
      {success && (
        <div className="bg-green-100 border border-green-500 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="font-bold text-lg text-[#333]">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name *"
            className="w-full bg-white border border-blue-500 px-4 py-2 mt-1 rounded rounded-[5px]"
          />
          {error.name && (
            <p className="text-red-500 text-sm mt-1">{error.name}</p>
          )}
        </div>

        <div>
          <label className="font-bold text-lg text-[#333]">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            className="w-full bg-white border border-blue-500 px-4 py-2 mt-1 rounded rounded-[5px]"
          />
          {error.email && (
            <p className="text-red-500 text-sm mt-1">{error.email}</p>
          )}
        </div>

        <div>
          <label className="font-bold text-lg text-[#333]">Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone *"
            className="w-full bg-white border border-blue-500 px-4 py-2 mt-1 rounded rounded-[5px]"
          />
          {error.phone && (
            <p className="text-red-500 text-sm mt-1">{error.phone}</p>
          )}
        </div>

        <div>
          <label className="font-bold text-lg text-[#333]">Query:</label>
          <textarea
            type="text"
            name="query"
            value={formData.query}
            onChange={handleChange}
            placeholder="Add Your query *"
            className="w-full bg-white border border-blue-500 px-4 py-2 mt-1 h-[100px] rounded rounded-[5px]"
          ></textarea>
          {error.query && (
            <p className="text-red-500 text-sm mt-1">{error.query}</p>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#0065b5] font-bold text-lg text-white px-8 py-2 rounded"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

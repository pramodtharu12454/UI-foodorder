"use client";
import { useState } from "react";

export default function AddFood() {
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    spicyLevel: "Low",
    image: "",
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); // 🔁 Replace with your preset

    setUploading(true);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`, // 🔁 Replace cloud_name
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    setForm({ ...form, image: data.secure_url });
    setUploading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit Food:", form);
    // Add your submission logic here (e.g., API call)
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Food</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          className="w-full p-2 border rounded"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients"
          className="w-full p-2 border rounded"
          value={form.ingredients}
          onChange={handleChange}
        />
        <select
          name="spicyLevel"
          className="w-full p-2 border rounded"
          value={form.spicyLevel}
          onChange={handleChange}
        >
          <option value="Low">Low 🌶️</option>
          <option value="Medium">Medium 🌶️🌶️</option>
          <option value="High">High 🌶️🌶️🌶️</option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full p-2 border rounded"
        />
        {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
        {form.image && (
          <img
            src={form.image}
            alt="Preview"
            className="w-32 h-32 object-cover rounded"
          />
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Food
        </button>
      </form>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const  [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);


  const cities=[...new Set(users.map((u) => u.city))];
  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const transformed = res.data.map((u) => ({
          id: u.id,
          name: u.name,
          email: u.email,
          city: u.address.city,
        }));

        setUsers(transformed);
        setFiltered(transformed);
      })
      .catch(() => setError("Failed to fetch users"))
      .finally(() => setLoading(false));
  }, []);

  
  useEffect(() => {
    let temp = users;

    if (search.trim() !== "") {
      temp = temp.filter((u) =>
        u.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (city.trim() !== "") {
      temp = temp.filter((u) =>
        u.city.toLowerCase().includes(city.toLowerCase())
      );
    }

    setFiltered(temp);
  }, [search, city, users]);

if (loading)
  return (
    <div className="flex justify-center items-center h-screen">
      <h2 className="text-xl font-semibold">Loading...</h2>
    </div>
  );
  
if (error)
  return (
    <div className="flex justify-center items-center h-screen">
      <h2 className="text-red-500 text-2xl font-semibold">{error}</h2>
    </div>
  );



  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>

    
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-1/2"
        />

        <select
  value={city}
  onChange={(e) => setCity(e.target.value)}
  className="border p-2 rounded w-1/2"
>
  <option value="">Filter by city</option>
  {cities.map((c, index) => (
    <option key={index} value={c}>
      {c}
    </option>
  ))}
</select>

      </div>

      
      <table className="w-full border-collapse border border-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">City</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((u) => (
            <tr
              key={u.id}
              onClick={() => setSelectedUser(u)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="border p-2">{u.id}</td>
              <td className="border p-2">{u.name}</td>
              <td className="border p-2">{u.email}</td>
              <td className="border p-2">{u.city}</td>
            </tr>
          ))}
        </tbody>
      </table>


      {selectedUser && (
        <div className="mt-6 p-4 border rounded shadow">
          <h3 className="text-xl font-semibold mb-2">User Details</h3>
          <p><strong>ID:</strong> {selectedUser.id}</p>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>City:</strong> {selectedUser.city}</p>

          <button
            onClick={() => setSelectedUser(null)}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
              )}
        </div>
       );
              }
export default Test;
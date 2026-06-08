import { useState } from "react";

function Admin() {

  const role = localStorage.getItem("role");

  const [vendorName, setVendorName] = useState("");
  const [vendorEmail, setVendorEmail] = useState("");
  const [vendors, setVendors] = useState([]);

  if (role !== "admin") {
    return <h1>Access Denied</h1>;
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Welcome Admin</p>

      <h2>Add Vendor</h2>

      <input
        type="text"
        placeholder="Vendor Name"
        onChange={(e) => setVendorName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Vendor Email"
        onChange={(e) => setVendorEmail(e.target.value)}
      />

      <br /><br />

      <button
        onClick={() =>
          setVendors([
            ...vendors,
            {
              name: vendorName,
              email: vendorEmail
            }
          ])
        }
      >
        Add Vendor
      </button>

      <h2>Vendor List</h2>

      {vendors.map((vendor, index) => (
        <div key={index}>
          <p>Name: {vendor.name}</p>
          <p>Email: {vendor.email}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default Admin;
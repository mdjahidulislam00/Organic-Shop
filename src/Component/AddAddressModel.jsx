import  { useState } from "react";

const AddAddressModel = ({ isOpen, onClose, setUserAddress }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [streetAddress, setStreetAddress] = useState("");

  const handleAddAddress = () => {
    // Create an address object with the collected information
    const address = {
      name,
      number,
      email,
      city,
      streetAddress,
    };

    // Call the onAddAddress callback to pass the address data
    setUserAddress(address);

    // Close the modal
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : "modal-closed"}`}>
      <div className="modal-content">
        <h2>Add Address</h2>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Number:</label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>Street Address:</label>
        <input
          type="text"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
        <button onClick={handleAddAddress}>Add Address</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddAddressModel;

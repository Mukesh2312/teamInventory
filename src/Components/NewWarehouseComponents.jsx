import React, { useState } from 'react';

 

const NewWarehouseComponents = () => {
  // State for form inputs
  const initialFormState = {
    warehouseId: '',
    warehouseName: '',
    contactPerson1: '',
    contactPerson2: '',
    contactNumber: '',
    officialEmail: '',
    alternateNumber: '',
    personalEmail: '',
    location: '',
    postalAddress: '',
    pincode: '',
    type: '',
    materials: [{ name: '', quantity: '' }]
  };

  // State to manage form inputs and form visibility
  const [formState, setFormState] = useState(initialFormState);
  const [showForm, setShowForm] = useState(true); // New state to control visibility

  // Add new material line
  const addNewLine = () => {
    setFormState({
      ...formState,
      materials: [...formState.materials, { name: '', quantity: '' }]
    });
  };

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // Handle input change for materials
  const handleMaterialChange = (index, e) => {
    const values = [...formState.materials];
    values[index][e.target.name] = e.target.value;
    setFormState({ ...formState, materials: values });
  };

  // Handle form submission (create)
  const handleCreate = () => {
    // Example: Submit form data (you can replace this with an API call)
    console.log('Form data:', formState);

    // Optionally, add form validation here.
    alert('Warehouse created successfully!');
  };

  // Handle form cancel (hide form)
  const handleCancel = () => {
    setShowForm(false); // Hide the form when "Cancel" is clicked
  };

  return (
    <>
      {showForm ? ( // Conditional rendering: show form if `showForm` is true
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">New Warehouse</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <label className="w-32">Warehouse ID :</label>
              <input
                type="text"
                name="warehouseId"
                value={formState.warehouseId}
                onChange={handleInputChange}
                className="flex-1 border rounded-lg p-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-32">Warehouse Name :</label>
              <input
                type="text"
                name="warehouseName"
                value={formState.warehouseName}
                onChange={handleInputChange}
                className="flex-1 border rounded-lg p-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-32">Contact Person 1 :</label>
              <input
                type="text"
                name="contactPerson1"
                value={formState.contactPerson1}
                onChange={handleInputChange}
                className="flex-1 border rounded-lg p-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-32">Contact Person 2 :</label>
              <input
                type="text"
                name="contactPerson2"
                value={formState.contactPerson2}
                onChange={handleInputChange}
                className="flex-1 border rounded-lg p-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-32">Contact Number :</label>
              <input
                type="text"
                name="contactNumber"
                value={formState.contactNumber}
                onChange={handleInputChange}
                className="flex-1 border rounded-lg p-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-32">Official E-mail :</label>
              <input
                type="email"
                name="officialEmail"
                value={formState.officialEmail}
                onChange={handleInputChange}
                className="flex-1 border rounded-lg p-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-32">Alternate Number :</label>
              <input
                type="text"
                name="alternateNumber"
                value={formState.alternateNumber}
                onChange={handleInputChange}
                className="flex-1 border rounded-lg p-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-32">Personal E-mail :</label>
              <input
                type="email"
                name="personalEmail"
                value={formState.personalEmail}
                onChange={handleInputChange}
                className="flex-1 border rounded-lg p-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-32">Location :</label>
              <input
                type="text"
                name="location"
                value={formState.location}
                onChange={handleInputChange}
                className="flex-1 border rounded-lg p-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-32">Postal Address :</label>
              <input
                type="text"
                name="postalAddress"
                value={formState.postalAddress}
                onChange={handleInputChange}
                className="flex-1 border rounded-lg p-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-32">Pincode :</label>
              <input
                type="text"
                name="pincode"
                value={formState.pincode}
                onChange={handleInputChange}
                className="flex-1 border rounded-lg p-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-32">Type :</label>
              <input
                type="text"
                name="type"
                value={formState.type}
                onChange={handleInputChange}
                className="flex-1 border rounded-lg p-2"
              />
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2">Stored Material Name</h3>

          {formState.materials.map((material, index) => (
            <div key={index} className="flex gap-4 mb-4">
              <div className="flex items-center gap-2 flex-1">
                <label className="w-48">Stored Material Name :</label>
                <input
                  type="text"
                  name="name"
                  value={material.name}
                  onChange={(e) => handleMaterialChange(index, e)}
                  className="border rounded-lg p-2 w-full"
                />
              </div>
              <div className="flex items-center gap-2 w-1/4">
                <label className="w-32">Quantity :</label>
                <input
                  type="text"
                  name="quantity"
                  value={material.quantity}
                  onChange={(e) => handleMaterialChange(index, e)}
                  className="border rounded-lg p-2 w-full"
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addNewLine}
            className="flex items-center gap-2 text-blue-500 hover:underline mt-2"
          >
            ➕ Add New Line
          </button>

          <div className="mt-6 flex justify-end gap-4">
            <button onClick={handleCreate} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Create
            </button>
            <button onClick={handleCancel} className="bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-6">
          <p className="text-lg">Form has been canceled.</p>
        </div>
      )}
    </>
  );
};
 


export default NewWarehouseComponents;

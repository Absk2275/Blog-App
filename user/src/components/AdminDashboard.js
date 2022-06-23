import React from "react";

const AdminDashboard = () => {

  const showheader =()=>(
    <div className="bg-black text-white py-4">
      <div className="container bg-black">
        <div className="row">
          <div className="col">
            <h2>
              <i className="fas fa-home"></i> Dashboard
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
  

  return <section>{showheader()}</section>;
};
export default AdminDashboard;

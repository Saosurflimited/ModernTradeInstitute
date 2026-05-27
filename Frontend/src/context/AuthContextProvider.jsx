import React, { useState } from "react";

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const contextData = {};

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f8f9fa",
        }}
      >
        <Ova color="#36d7b7" height={60} width={60}/>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={contextData}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

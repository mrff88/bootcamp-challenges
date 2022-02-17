import mongoose from "mongoose";

// Schema client
const schemaClients = {
  name: String,
  document: String,
  address: String,
  phone: String,
};

// Client model
const Client = mongoose.model("Client", schemaClients, "client");

export default Client;

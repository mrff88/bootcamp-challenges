import { Client } from "../models/index.js";

// Controller get all clients
export const getAllClients = async (request, response) => {
  try {
    const clients = await Client.find();
    if (clients.length === 0) response.status(204).send();
    else response.status(200).json(clients);
  } catch (error) {
    response.status(500).json({ error });
  }
};

// Controller get one client
export const getOneClient = async (req, res) => {
  const { id: idClient } = req.params;
  const client = await Client.findById(idClient);
  res.json(client);
};

// Controller create one client
export const createClient = async (req, res) => {
  try {
    const client = new Client(req.body);
    const newClient = await client.save();
    newClient && res.status(201).json(newClient);
  } catch (error) {
    response.status(500).json({ error });
  }
};

export const findClient = async (req, res, next) => {
  const { id: idClient } = req.params;

  try {
    const client = await Client.findById(idClient);
    if (client) {
      req.data = { client };
      next();
    } else {
      req.status(204).json({ error: "No client" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateClient = async (req, res) => {
  const clientToUpdate = req.body;
  const { client } = req.data;

  try {
    Client.updateOne(client, clientToUpdate, (error, updatedClient) => {
      if (!error) {
        res.status(200).json(updatedClient);
      } else res.status(500).send(error);
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteClient = async (req, res) => {
  const { id: idClient } = req.params;
  try {
    const clientToDelete = await Client.findById(idClient);
    if (!clientToDelete) {
      res.status(204).send({ err: "No client to delete" });
    } else {
      const deletedClient = await Client.deleteOne(clientToDelete);
      if (deletedClient) res.status(200).json(deletedClient);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

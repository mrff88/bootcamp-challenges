import express from "express";
import { clientCtrl } from "../controllers/index.js";

const {
  getAllClients,
  getOneClient,
  createClient,
  findClient,
  updateClient,
  deleteClient,
} = clientCtrl;

const router = express.Router();

const clientRoutes = {
  GET_ALL: "/clients",
  GET_ONE: "/clients/:id",
  CREATE: "/clients/create",
  UPDATE: "/clients/update/:id",
  DELETE: "/clients/delete/:id",
};

router.get(clientRoutes.GET_ALL, getAllClients);
router.get(clientRoutes.GET_ONE, getOneClient);
router.post(clientRoutes.CREATE, createClient);
router.put(clientRoutes.UPDATE, findClient, updateClient);
router.delete(clientRoutes.DELETE, deleteClient);

export default router;

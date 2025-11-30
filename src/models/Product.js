// const products = [
//   {
//     id: 1,
//     name: "camiseta deportiva",
//     price: 150,
//     categories: ["ropa", "deportes"],
//   },
//   {
//     id: 2,
//     name: "Zapatos Running",
//     price: 1200,
//     categories: ["calzado", "deportes"],
//   },
//   {
//     id: 3,
//     name: "Mochila Escolar",
//     price: 350,
//     categories: ["mochilas", "escolar"],
//   },
//   {
//     id: 4,
//     name: "Auriculares Bluetooth",
//     price: 800,
//     categories: ["tecnologia", "audio"],
//   },
//   {
//     id: 5,
//     name: "Botella termica",
//     price: 220,
//     categories: ["hogar", "accesorios"],
//   }

// ];

import { db } from "./firebase.js";

import {collection, getDocs, doc, getDoc } from "firebase/firestore";

const productsCollection = collection(db, "product");

export const getAllProducts = async () => {
   try {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
   } catch (error) {
    console.error(error);
   }
};

export const getProductById = async (id) => {
    try {
const productRef = doc(productsCollection, id);
const snapshot = await getDoc(productRef);
return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
} catch (error) {
    console.error(error);
    throw error;
  }
};
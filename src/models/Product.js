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

import {collection, getDocs, doc, getDoc, addDoc, deleteDoc, setDoc, updateDoc } from "firebase/firestore";

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

export const createProduct = async (data) => {
  try {
    const docRef = await addDoc(productsCollection, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async (id, ProductData) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }
    await setDoc(productRef, ProductData);
    return { id, ...ProductData };
  } catch (error) {
    console.error(error);
  }

};

export const updatePatchProduct = async (id, ProductData) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }
    // await setDoc(productRef, ProductData , { merge: true });
    await updateDoc(productRef, ProductData );
    return { id, ...ProductData };
  } catch (error) {
    console.error(error);
  }

};

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
  } 
  
  await deleteDoc(productRef);
  return true;
}catch (error) {
    console.error(error);
  }
};
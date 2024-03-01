import {
  getDocs,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "./firebase";

const apiMiddleware = (store) => (next) => (action) => {
  if (action.type === "apiCall") {
    const { method, path, data, id, onSuccess } = action.payload;
    const refCollection = collection(firestore, path);

    if (method === "GET") {
      getDocs(refCollection).then((res) => {
        const a = res.docs.map((item) => {
          return { ...item.data(), id: item.id };
        });

        store.dispatch(onSuccess(a));
      });
    } else if (action.payload.method === "POST") {
   
        addDoc(refCollection, data).then((res) => {
          store.dispatch(onSuccess())})} else if (method === "DELETE") {
      const oneDoc = doc(refCollection, id);
      deleteDoc(oneDoc).then((res) => {
        store.dispatch(onSuccess());
      });
    }
  } else {
    next(action);
  }
};

export default apiMiddleware;

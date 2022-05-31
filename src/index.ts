import db from './firebase/config';
import { retornaDocumentos } from './helpers/mostrar-documentos';
import {
  addDoc,
  deleteDoc,
  collection,
  onSnapshot,
  doc,
  query,
  updateDoc,
  setDoc,
  getDocs,
  where,
  orderBy,
  limit,
  startAfter,
  endBefore,
} from 'firebase/firestore';

const usuariosRef = collection(db, 'usuarios');

// btn Next
const btnNext = document.createElement('button');
btnNext.innerText = 'Next Page';
document.body.append(btnNext);

let firstDocument: any = null;
let lastDocument: any = null;

btnNext.addEventListener('click', () => {
  const q_order = query(
    usuariosRef,
    orderBy('nombre'),
    startAfter(lastDocument)
  );
  const q_limit = query(q_order, limit(2));

  getDocs(q_limit).then((snap) => {
    firstDocument = snap.docs[0] || null;
    lastDocument = snap.docs[snap.docs.length - 1] || null;
    retornaDocumentos(snap);
  });
});

// btn Previous
const btnPrev = document.createElement('button');
btnPrev.innerText = 'Previous Page';
document.body.append(btnPrev);

btnPrev.addEventListener('click', () => {
  const q_order = query(
    usuariosRef,
    orderBy('nombre'),
    endBefore(firstDocument)
  );
  const q_limit = query(q_order, limit(2));

  getDocs(q_limit).then((snap) => {
    firstDocument = snap.docs[0] || null;
    lastDocument = snap.docs[snap.docs.length - 1] || null;
    retornaDocumentos(snap);
  });
});

btnNext.click();

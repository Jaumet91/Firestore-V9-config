import { QuerySnapshot } from 'firebase/firestore';

export const retornaDocumentos = (snapshot: QuerySnapshot) => {
  const documentos: any[] = [];
  snapshot.docs.forEach((doc) => {
    documentos.push({ ...doc.data(), id: doc.id });
  });
  console.log(documentos);

  return documentos;
};

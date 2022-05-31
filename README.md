# usuarios Collection

## Objeto

```typescript
const usuario = {
  nombre: 'Susana',
  activo: false,
  fechaNaci: 0,
  salario: 1950,
};
```

## Add users

```typescript
addDoc(collection(db, 'usuarios'), usuario);
```

## Modify users by id

```typescript
const usuariosRef = doc(collection(db, 'usuarios'), 'ZVdgSPNHJsgJRQoUSyHP');
updateDoc(usuariosRef, { activo: true });
```

## Set users by id

```typescript
const usuariosRef = doc(collection(db, 'usuarios'), 'ZVdgSPNHJsgJRQoUSyHP');
setDoc(usuariosRef, { nombre: 'Sofia', activo: true, edad: 90, casada: true });
```

## Delete users by id

```typescript
const usuariosRef = doc(collection(db, 'usuarios'), 'ZVdgSPNHJsgJRQoUSyHP');
deleteDoc(usuariosRef);
```

## Get colletion data

```typescript
const usuariosRef = collection(db, 'usuarios');
getDocs(usuariosRef).then(retornaDocumentos);
```

## Real time collection data

```typescript
const usuariosRef = collection(db, 'usuarios');
onSnapshot(usuariosRef, retornaDocumentos);
```

## Select \* from usuarios where activo = true

```typescript
const q = query(collection(db, 'usuarios'), where('activo', '==', true));
const querySnapshot = getDocs(q);

querySnapshot.then(retornaDocumentos).catch(console.log);
```

## Select \* from usuarios where salario > 1800

```typescript
const q = query(collection(db, 'usuarios'), where('salario', '>', 1800));
const querySnapshot = getDocs(q);

querySnapshot.then(retornaDocumentos).catch(console.log);
```

## Select \* from usuarios where salario > 1800 and salario < 2300

```typescript
const q = query(
  collection(db, 'usuarios'),
  where('salario', '>=', 1800),
  where('salario', '<=', 2300)
);
const querySnapshot = getDocs(q);

querySnapshot.then(retornaDocumentos).catch(console.log);
```

## Select \* from usuarios where salario > 1800 and activo == true

```typescript
const q = query(
  collection(db, 'usuarios'),
  where('salario', '>=', 1800),
  where('activo', '==', true)
);
const querySnapshot = getDocs(q);

querySnapshot.then(retornaDocumentos).catch(console.log);
```

## select \* from usuarios order by nombre asc, salario asc

```typescript
const usuariosRef = collection(db, 'usuarios');
const q = query(usuariosRef, orderBy('nombre'), orderBy('salario'));
onSnapshot(q, retornaDocumentos);
```

## Mostrar solo 4 registros

```typescript
const usuariosRef = collection(db, 'usuarios');
const q = query(usuariosRef, limit(4));
getDocs(q).then(retornaDocumentos);
```

import { createContext, useEffect, useState } from "react";

export const PhotosContext = createContext();

const PHOTO_URL = "/photos.json";

const PhotosProvider = ({ children }) => {

  // ESTADO PARA LOS OBJETOS JSON 👇
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const response = await fetch(PHOTO_URL);

    // CAMBIO DE NOMBRE, PHOTOS A "PHOTOSDB" 👇
    const { photos: photosDB } = await response.json();

    // AGREGADO DE OBJETOS, CON "MAP", AL ESTADO "PHOTOS" Y UNA NUEVA PROP => "ISFAVORITE" 👇
    setPhotos(photosDB.map((photo) => ({ ...photo, isFavorite: false })));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <PhotosContext.Provider
      value={{
        photos,
        setPhotos,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
};
export default PhotosProvider;

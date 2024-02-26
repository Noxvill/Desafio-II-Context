import { createContext, useEffect, useState } from "react";
export const PhotosContext = createContext();


const PhotosProvider = ({ children }) => {
const [photos, setPhotos] = useState([]);


const getPhotos = async () => {
const response = await fetch("/photos.json");
const { photos: FotosJs } = await response.json();
setPhotos(FotosJs.map((photo) => ({ ...photo, isFavorite: false })));
};


useEffect(() => {getPhotos();}, []);

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

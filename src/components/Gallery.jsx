import { useContext } from "react";
import { PhotosContext } from "../Context/PhotosContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotosContext);

  const addFavorite = (id) => {
    const newPhotos = photos.map((photo) => {
      // EVALUO EL ID QUE LLEGA PARA VER SI COINCIDE CON ALGUNO DE LOS OBJETOS (PHOTOS)
      // SI COINCIDE, RETORNO TODO EL OBJETO Y LA INVERSA DE "ISFAVORITE" PARA AGREGAR A FAVORITOS 👇
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      // SINO RETORNO LAS FOTOS QUE HAY 👇
      return photo;
    });
    setPhotos(newPhotos);
  };

  return (

    // LO PRIMERO, SE RENDERIZAN TODAS LAS FOTOS 👇
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo, i) => (
        <div
          onClick={() => addFavorite(photo.id)}
          className="photo"
          style={{ backgroundImage: `url(${photo.src.tiny})` }}
          key={i}
        >
          <IconHeart filled={photo.isFavorite} />

          <p> {photo.desc} </p>
        </div>
      ))}
    </div>
  );
};
export default Gallery;

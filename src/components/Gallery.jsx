import { useContext } from "react";
import { PhotosContext } from "../Context/ContextFotos";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotosContext);

  const Favoritos = (id) => {
    const newFotos = photos.map((photo) => {
    if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
  
      return photo;
    });
    setPhotos(newFotos);
  };

  return (

    
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo, i) => (
        <div
          onClick={() => Favoritos(photo.id)}
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

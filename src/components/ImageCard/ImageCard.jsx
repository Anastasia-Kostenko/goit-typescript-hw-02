import css from './ImageCard.module.css';

export const ImageCard = ({ item, onClickModal }) => {
  return (
    <div className={css.wrapperImg}>
      <img
        className={css.img}
        src={item.urls.small}
        alt={item.alt_description}
        data-id={item.id}
        onClick={() => onClickModal(item.id)}
      />
    </div>
  );
};

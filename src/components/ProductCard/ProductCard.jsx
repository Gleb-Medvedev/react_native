import { useState } from "react";
import "./ProductCard.css"

export function ProductCard(props) {

    const {title="Тут должно быть название...",
        img="https://cdn-icons-png.flaticon.com/512/3481/3481105.png",
        id} = props

        let [likesCount, setLikesCount] = useState(0);

        function incrementLikes() {
            setLikesCount(likesCount + 1);
        }

    return (
        <div className="product-card" data-id={id}>
            <div className="product-card__img-wrapper">
                <img src={img} className="product-card__img" alt="изображение" />
            </div>
            <h3 className="product-card__title">{title}</h3>
            <span className="product-card__like-counter">Лайки: {likesCount}</span>
            <button className="product-card__like-btn product-card__btn" onClick={incrementLikes}>Лайкнуть!</button>
        </div>
    )
}
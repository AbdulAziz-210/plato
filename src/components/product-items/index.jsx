//
import "./index.css";

const ProductItem = ({
  images = "",
  firstText = "",
  secondText = "",
  thirdText = "",
  dataAos = "",
  dataAosDelay = "",
  imgDelay = "",
  dataAosImg = "",
  flexRowReverse = false
}) => {
  return (
    <li
      className="product-item  items-center flex-col sm:flex-col md:flex-row lg:flex sm:mb-6 text-center"
      style={{
        flexDirection: flexRowReverse && "row-reverse"
      }}
    >
      <img
        className="product-img"
        src={images}
        alt=""
        data-aos={dataAosImg}
        data-aos-delay={imgDelay}
      />

      <div
        className="flex flex-col text-start"
        data-aos={dataAos}
        data-aos-delay={dataAosDelay}
      >
        <p className="product-text text-lg font-c">{firstText}</p>
        <p className="product-text text-3xl sm:text-4xl  lg:text-6xl mb-9 font-c">
          {secondText}
        </p>
        <p className="product-text text-lg">{thirdText}</p>
      </div>
    </li>
  );
};

export default ProductItem;

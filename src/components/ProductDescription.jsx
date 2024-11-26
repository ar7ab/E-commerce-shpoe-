const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus
          quae, veritatis incidunt officia, alias asperiores sint dolorem amet
          consequuntur rerum consectetur perspiciatis corrupti quas laborum nisi
          eligendi provident. Incidunt possimus, nesciunt non facere maiores,
          obcaecati nam aspernatur porro dolorum sit voluptatum, dolore hic
          ullam error suscipit provident molestiae? Asperiores, ullam? Quaerat
          mollitia nulla dolorem.
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          animi autem dolor mollitia quae, tenetur id magni quisquam odio
          placeat eligendi fuga eos iste veniam at non reiciendis?
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;

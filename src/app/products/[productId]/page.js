const DynamicProductPage = async ({ params, searchParams }) => {
  const productId = await params.productId;
  console.log(await searchParams);
  return (
    <div>
      <h1 className="text-xl text-center">
        This is Dynamic Product {productId}{" "}
      </h1>
    </div>
  );
};

export default DynamicProductPage;

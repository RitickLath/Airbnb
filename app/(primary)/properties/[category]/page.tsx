const DynamincCategory = ({ params }) => {
  const decodedCategory = decodeURIComponent(params?.category);

  console.log(decodedCategory);
  return <p>Category: {decodedCategory}</p>;
};

export default DynamincCategory;

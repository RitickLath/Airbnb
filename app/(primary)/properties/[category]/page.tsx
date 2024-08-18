const DynamincCategory: React.FC<any> = ({ params }) => {
  const decodedCategory = decodeURIComponent(params?.category);

  console.log(decodedCategory);
  return <p>Category: {decodedCategory}</p>;
};

export default DynamincCategory;

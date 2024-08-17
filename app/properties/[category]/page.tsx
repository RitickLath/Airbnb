"use client";

import { useSearchParams } from "next/navigation";

const DynamincCategory = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  return <p>Category: {title}</p>;
};

export default DynamincCategory;

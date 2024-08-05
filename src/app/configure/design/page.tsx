// import React from "react";

import { db } from "@/db";
import { notFound } from "next/navigation";
import DesignCofigurator from "./DesignCofigurator";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams

  if(!id || typeof id !== 'string') {
    return notFound()
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  })

  if(!configuration) {
    return notFound()
  }

  const {imageUrl, width, height} = configuration

  return <DesignCofigurator />;
};

export default Page;

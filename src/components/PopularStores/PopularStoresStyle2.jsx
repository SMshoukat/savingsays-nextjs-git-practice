"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { GetPopularStores } from "@/src/actions/GetPopularAction";

const PopularStores = () => {
  // Define categories array here
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await GetPopularStores();
      setStores(data);
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-4">
      {stores &&
        stores.map((store) => (
          <div style={{width: "128px"}}>
            <img
              src={store?.media?.thumb}
              className="rounded-3"
              alt=""
            />
          </div>
        ))}
    </div>
  );
};

export default PopularStores;

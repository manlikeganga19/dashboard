"use client";

import React from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const navbar = () => {

  const pathname = usePathname()

  return <div className={styles.container}>navbar</div>;
};

export default navbar;

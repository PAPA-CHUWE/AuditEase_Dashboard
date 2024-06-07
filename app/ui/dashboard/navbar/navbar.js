"use client";
import React from "react";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdSearch,
  MdSettings,
} from "react-icons/md";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
      
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={30} className={styles.iconChat}/>
          <MdNotifications size={30} className={styles.iconNotifications}/>
          <MdSettings size={30} className={styles.iconPublic}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

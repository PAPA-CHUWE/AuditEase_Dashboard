"use client"; // Add this directive for Next.js 13+

import React from "react";
import styles from "./sidebar.module.css";
import sidebarLinks from "@/app/Contants/SidebarList";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";

const Sidebar = () => {
  // Access the links for the given userRole
  const links = sidebarLinks["admin"] || [];

  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className={styles.userDetails}>
          <Image
            src="/assets/images/audit_ease-removebg-preview.png"
            alt=""
            width={150}
            height={70}
            priority
          />
          
        </div>
      </div>
      <ul className={styles.navList}>
        {links.map((link, index) => (
          <li key={index} className={styles.navItem}>
            <Link href={link.path} legacyBehavior>
              <a
                className={`${styles.navLink} ${
                  pathname === link.path && styles.active
                }`}
              >
                {link.icon}
                <span className={styles.navText}>{link.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout size={20} />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;

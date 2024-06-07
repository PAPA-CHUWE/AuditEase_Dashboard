import React from "react";
import styles from "../../ui/dashboard/institutions/institutions.module.css";
import institutionData from "@/app/Contants/institutionData";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { MdPreview, MdDelete } from "react-icons/md";

const InstitutionDashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for an Institution..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact Email</th>
            <th>Phone Number</th>
            <th>Authorized Person</th>
            <th>Role</th>
            <th>Next Review Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {institutionData.map((institution, index) => (
            <tr key={index}>
              <td>
                <div className={styles.institution}>
                  <Image
                    src={"/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.institutionImage}
                  />
                </div>
              </td>
              <td>{institution.name}</td>
              <td>{institution.address}</td>
              <td>{institution.contactEmail}</td>
              <td>{institution.phoneNumber}</td>
              <td>{institution.authorizedPerson.name}</td>
              <td>{institution.authorizedPerson.role}</td>
              <td>
                {new Date(institution.nextReviewDate).toLocaleDateString()}
              </td>
              <td>
                <div className={styles.buttons}>
                  <Link href={"/"}>
                    <MdPreview
                      size={40}
                      className={`${styles.button} ${styles.view}`}
                    />
                  </Link>
                  <MdDelete
                    size={40}
                    className={`${styles.button} ${styles.delete}`}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default InstitutionDashboard;

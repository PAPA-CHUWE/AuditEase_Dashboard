import React from "react";
import styles from "./LatestUpdates.module.css";
import institutions from "@/app/Contants/institutions";


const LatestUpdates = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Revoked":
        return styles.revoked;
      case "Submitted":
        return styles.submitted;
      case "Pending":
        return styles.pending;
      case "Accessed":
        return styles.accessed;
      default:
        return styles.defaultColor;
    }
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Updates</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Institution Name</th>
            <th>Contact Email</th>
            <th>Phone Number</th>
            <th>Authorized Person&apos;s Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {institutions.map((institution, index) => (
            <tr key={index}>
              <td>{institution.name}</td>
              <td>{institution.email}</td>
              <td>{institution.phoneNumber}</td>
              <td>{institution.authorizedPersonName}</td>
              <td className={getStatusColor(institution.status)}>{institution.status}</td>            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestUpdates;

"use client"


import React from 'react';
import styles from "../../ui/dashboard/add-users/add-users.module.css";

const AddUsers = () => {
  return (
    <div className={styles.container}>
      <form action={""} className={styles.form}>
        {/* Common Fields */}
        <input type="text" placeholder="Name" name="name" required />
        <input type="text" placeholder="Surname" name="surname" required />
        <input type="email" placeholder="Email" name="email" required />
        <input type="tel" placeholder="Phone Number" name="phoneNumber" required />

        {/* User Role Selection */}
        <select name="userRole" required>
          <option value="">Select User Role</option>
          <option value="institution">Institution</option>
          <option value="admin">Admin</option>
          <option value="superuser">SuperUser</option>
          <option value="reviewer">Reviewer</option>
        </select>

        {/* Additional Fields based on User Role */}
        <div className={styles.additionalFields}>
          {/* Institution Fields */}
          <div className={styles.institutionFields}>
            <input type="text" placeholder="Institution Name" name="institutionName" />
            <input type="text" placeholder="Address" name="address" />
            <input type="email" placeholder="Contact Email" name="contactEmail" />
            <input type="text" placeholder="Authorized Person's Name" name="authorizedPersonName" />
            <input type="text" placeholder="Authorized Person's Role" name="authorizedPersonRole" />
          </div>

          {/* Admin Fields */}
          <div className={styles.adminFields}>
            <input type="text" placeholder="Admin Name" name="adminName" />
            <input type="email" placeholder="Admin Email" name="adminEmail" />
            <input type="tel" placeholder="Admin Phone Number" name="adminPhoneNumber" />
            <input type="text" placeholder="Admin Role/Position" name="adminRole" />
          </div>

          {/* SuperUser Fields */}
          <div className={styles.superUserFields}>
            <input type="text" placeholder="SuperUser Name" name="superUserName" />
            <input type="email" placeholder="SuperUser Email" name="superUserEmail" />
            <input type="tel" placeholder="SuperUser Phone Number" name="superUserPhoneNumber" />
            <input type="text" placeholder="SuperUser Role/Position" name="superUserRole" />
          </div>

          {/* Reviewer Fields */}
          <div className={styles.reviewerFields}>
            <input type="text" placeholder="Qualifications" name="qualifications" />
            <input type="text" placeholder="Area of Specialization" name="specialization" />
          </div>
        </div>

        {/* Form Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUsers;

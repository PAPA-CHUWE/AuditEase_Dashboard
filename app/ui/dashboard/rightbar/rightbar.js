"use client"
import React, { useState } from 'react';
import styles from "./rightbar.module.css"

const Rightbar = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const filesWithUrls = files.map(file => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setUploadedFiles(prevFiles => [...prevFiles, ...filesWithUrls]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>
            <h3 className={styles.subHeading}>Documents To Be Uploaded</h3>
          </span>
        </div>
      </div>
      <div className={styles.uploadSection}>
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          className={styles.fileInput}
        />
        <ul className={styles.fileList}>
          {uploadedFiles.map((file, index) => (
            <li key={index} className={styles.fileItem}>
              <a href={file.url} download={file.name}>
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;

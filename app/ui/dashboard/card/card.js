import React from 'react'
import styles from "./card.module.css"
import { MdSupervisedUserCircle, MdPeopleAlt } from 'react-icons/md'
import { FaUniversity } from "react-icons/fa"

const Card = () => {

  const Users = [
    {
      title: "Institutions",
      subTitle: "Total Institutions Registered",
      total: 15,
      icon: FaUniversity,
      iconSize: 24
    },
    {
      title: "SuperUser",
      subTitle: "Total SuperUser Registered",
      total: 10,
      icon: MdSupervisedUserCircle,
      iconSize: 24
    },
    {
      title: "Reviewers",
      subTitle: "Total Reviewers Registered",
      total: 12,
      icon: MdPeopleAlt,
      iconSize: 24
    },
  ];

  return (
    <div className={styles.cardsContainer}>
      {Users.map((user, index) => (
        <div className={styles.card} key={index}>
          <user.icon size={user.iconSize} className={styles.icon} />
          <div className={styles.texts}>
            <span className={styles.title}>{user.title}</span>
            <span className={styles.subTitle}>{user.subTitle}</span>
            <span className={styles.total}>Total: {user.total}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card

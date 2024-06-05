import { FaHome, FaUser, FaUsers, FaFileAlt, FaCalendarAlt, FaPlusCircle } from 'react-icons/fa';

// Sidebar links for different user roles
const sidebarLinks = {
  institution: [
    { name: 'Dashboard', path: '/institution/dashboard', icon: <FaHome /> },
    { name: 'Submit Review', path: '/institution/submit-review', icon: <FaFileAlt /> },
    { name: 'Past Submissions', path: '/institution/past-submissions', icon: <FaCalendarAlt /> },
    { name: 'Profile', path: '/institution/profile', icon: <FaUser /> },
  ],
  admin: [
    { name: 'Dashboard', path: '/dashboard', icon: <FaHome /> },
    { name: 'Manage Users', path: '/dashboard/users', icon: <FaUsers /> },
    { name: 'Manage Institutions', path: '/dashboard/institutions', icon: <FaPlusCircle /> },
    { name: 'Manage Reviewers', path: '/dashboard/manage-reviews', icon: <FaFileAlt /> },
    { name: 'Profile', path: '/dashboard/profile', icon: <FaUser /> },
  ],
  superuser: [
    { name: 'Dashboard', path: '/superuser/dashboard', icon: <FaHome /> },
    { name: 'Manage Admins', path: '/superuser/manage-admins', icon: <FaUsers /> },
    { name: 'Manage Institutions', path: '/superuser/manage-institutions', icon: <FaUsers /> },
    { name: 'Profile', path: '/superuser/profile', icon: <FaUser /> },
  ],
  reviewer: [
    { name: 'Dashboard', path: '/reviewer/dashboard', icon: <FaHome /> },
    { name: 'Submit Document', path: '/reviewer/submit-document', icon: <FaFileAlt /> },
    { name: 'Past Submissions', path: '/reviewer/past-submissions', icon: <FaCalendarAlt /> },
    { name: 'Profile', path: '/reviewer/profile', icon: <FaUser /> },
  ],
};

export default sidebarLinks;

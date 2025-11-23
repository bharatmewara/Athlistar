import React, { useState, useEffect } from 'react';
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase/config";
import { collection, getDocs, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('analytics');

  // Security Check
  if (currentUser?.role !== 'admin') return <div className="access-denied">⛔ Admin Access Only</div>;

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <div className="admin-logo">ATHLISTAR <span className="badge-admin">ADMIN</span></div>
        <nav>
          <button onClick={() => setActiveTab('analytics')} className={activeTab === 'analytics' ? 'active' : ''}>📊 Analytics</button>
          <button onClick={() => setActiveTab('users')} className={activeTab === 'users' ? 'active' : ''}>👥 User Management</button>
          <button onClick={() => setActiveTab('products')} className={activeTab === 'products' ? 'active' : ''}>👟 Products</button>
          <button onClick={() => setActiveTab('applications')} className={activeTab === 'applications' ? 'active' : ''}>📝 Athlete Apps</button>
          <button onClick={() => setActiveTab('content')} className={activeTab === 'content' ? 'active' : ''}>🎥 Coaching Content</button>
        </nav>
      </aside>
      <main className="admin-content">
        <header className="dashboard-header">
          <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
          <div className="user-badge">👤 {currentUser.email}</div>
        </header>
        <div className="dashboard-body">
          {activeTab === 'analytics' && <AnalyticsModule />}
          {activeTab === 'users' && <UserManagement />}
          {activeTab === 'products' && <ProductManager />}
          {activeTab === 'applications' && <AthleteApplications />}
          {activeTab === 'content' && <ContentUpload />}
        </div>
      </main>
    </div>
  );
};

/* --- Sub-Components --- */

const AnalyticsModule = () => (
  <div className="analytics-grid">
    <div className="stat-card"><h3>Total Revenue</h3><p>$12,450</p><span>+15% this week</span></div>
    <div className="stat-card"><h3>Active Users</h3><p>1,240</p><span>+5 new today</span></div>
    <div className="stat-card"><h3>Video Views</h3><p>8,902</p><span>Top: "Sprint Mechanics"</span></div>
    <div className="stat-card"><h3>Pending Apps</h3><p>12</p><span>Requires Action</span></div>
  </div>
);

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const snap = await getDocs(collection(db, "users"));
      setUsers(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };
    fetchUsers();
  }, []);

  const changeRole = async (id, newRole) => {
    await updateDoc(doc(db, "users", id), { role: newRole });
    alert(`User role updated to ${newRole}`);
    // Refresh list logic here
  };

  return (
    <div className="table-container">
      <table className="data-table">
        <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Action</th></tr></thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.displayName || 'N/A'}</td>
              <td>{u.email}</td>
              <td><span className={`role-tag ${u.role || 'user'}`}>{u.role || 'User'}</span></td>
              <td>
                <select onChange={(e) => changeRole(u.id, e.target.value)} defaultValue={u.role || 'user'}>
                  <option value="user">User</option>
                  <option value="athlete">Athlete</option>
                  <option value="partner">Partner</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [newProd, setNewProd] = useState({ name: '', price: '', category: 'Running' });

  const handleAdd = async () => {
    await addDoc(collection(db, "products"), newProd);
    alert("Product Added!");
    setNewProd({ name: '', price: '', category: 'Running' });
  };

  return (
    <div className="management-panel">
      <div className="add-form">
        <input placeholder="Product Name" value={newProd.name} onChange={e => setNewProd({...newProd, name: e.target.value})} />
        <input placeholder="Price" value={newProd.price} onChange={e => setNewProd({...newProd, price: e.target.value})} />
        <select value={newProd.category} onChange={e => setNewProd({...newProd, category: e.target.value})}>
           <option>Running</option><option>Tennis</option><option>Training</option>
        </select>
        <button className="btn-primary" onClick={handleAdd}>+ Add Product</button>
      </div>
      {/* List existing products logic here */}
    </div>
  );
};

const AthleteApplications = () => {
  // Mock Data for demo
  const apps = [
    { id: 1, name: "Sarah Jones", sport: "Track", status: "Pending" },
    { id: 2, name: "Mike Ross", sport: "Crossfit", status: "Pending" },
  ];
  
  return (
    <div className="apps-list">
      {apps.map(app => (
        <div key={app.id} className="app-card">
          <div>
            <h4>{app.name}</h4>
            <p>Sport: {app.sport}</p>
          </div>
          <div className="actions">
            <button className="btn-approve">Approve</button>
            <button className="btn-reject">Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const ContentUpload = () => (
  <div className="upload-container">
    <h3>Upload Coaching Video</h3>
    <input type="file" accept="video/*" />
    <input type="text" placeholder="Video Title" className="full-width" />
    <textarea placeholder="Description" className="full-width"></textarea>
    <button className="btn-primary">Upload & Publish</button>
  </div>
);

export default AdminDashboard;
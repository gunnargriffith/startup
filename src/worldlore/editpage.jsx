import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './editpage.css';

export function EditPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const sectionName = location.pathname.split('/').pop(); // Extract section name from URL
  const permissions = location.state?.permissions || {};

  const [content, setContent] = useState(""); // State for content

  const handleSave = () => {
    // Here you could implement a function to save the content (e.g., via API or localStorage)
    console.log(`Saving content for ${sectionName}:`, content);
    navigate('/worldlore'); // Navigate back to World Lore page after saving
  };

  return (
    <main className="editPageContainer">
      <h2>Edit {sectionName.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}</h2>
      <p>
        <strong>Permissions:</strong> Player: {permissions.player}, Race: {permissions.race}, Class: {permissions.class}
      </p>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={`Write about ${sectionName} here...`}
        className="editTextarea"
      />
      <div className="editActions">
        <button onClick={handleSave} className="saveButton">
          Save
        </button>
        <button onClick={() => navigate('/worldlore')} className="cancelButton">
          Cancel
        </button>
      </div>
    </main>
  );
}
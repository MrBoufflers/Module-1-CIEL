import { useState } from 'react';

export const FileExplorerComponent = () => {
  const [openFolders, setOpenFolders] = useState({});

  const toggleFolder = (folderId) => {
    setOpenFolders(prev => ({ ...prev, [folderId]: !prev[folderId] }));
  };

  const folderStyle = {
    cursor: 'pointer',
    userSelect: 'none',
    padding: '4px 0',
    color: 'var(--text)',
    transition: 'color 0.15s',
  };

  const fileStyle = {
    padding: '3px 0',
    color: 'var(--text-muted)',
  };

  const Folder = ({ name, id, children }) => (
    <div style={{ paddingLeft: 20 }}>
      <div style={folderStyle} onClick={() => toggleFolder(id)}>
        {openFolders[id] ? '▼' : '▶'} 📁 {name}
      </div>
      {openFolders[id] && <div style={{ paddingLeft: 20 }}>{children}</div>}
    </div>
  );

  return (
    <div style={{
      padding: '18px 20px',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      fontFamily: 'ui-monospace, monospace',
      fontSize: 13.5,
      color: 'var(--text)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
    }}>
      <div>
        <div style={folderStyle} onClick={() => toggleFolder('c-drive')}>
          {openFolders['c-drive'] ? '▼' : '▶'} 💻 Ce PC &gt; Disque local (C:)
        </div>
        {openFolders['c-drive'] && (
          <div style={{ paddingLeft: 20 }}>
            <Folder name="Program Files" id="program-files">
              <div style={fileStyle}>📄 chrome.exe</div>
              <div style={fileStyle}>📄 vscode.exe</div>
            </Folder>
            <Folder name="Utilisateurs" id="users">
              <Folder name="Eleve" id="eleve">
                <div style={fileStyle}>📁 Bureau</div>
                <div style={fileStyle}>📁 Documents</div>
                <div style={fileStyle}>📁 Téléchargements</div>
              </Folder>
            </Folder>
            <Folder name="Windows" id="windows">
              <div style={fileStyle}>📄 system32</div>
              <div style={fileStyle}>📄 explorer.exe</div>
            </Folder>
          </div>
        )}
      </div>
    </div>
  );
};

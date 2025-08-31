import React from 'react';


export const FileExplorerComponent = () => {
    const [openFolders, setOpenFolders] = React.useState({});

    const toggleFolder = (folderId) => {
        setOpenFolders(prev => ({ ...prev, [folderId]: !prev[folderId] }));
    };

    const Folder = ({ name, id, children }) => (
        <div className="pl-5">
            <div className="folder cursor-pointer select-none" onClick={() => toggleFolder(id)}>
                {openFolders[id] ? '▼' : '▶'} 📁 {name}
            </div>
            {openFolders[id] && <div className="pl-5">{children}</div>}
        </div>
    );
    
    return (
        <div className="not-prose p-4 bg-white border rounded-lg shadow-sm font-mono text-sm">
            <div>
                <div className="folder cursor-pointer select-none" onClick={() => toggleFolder('c-drive')}>
                    {openFolders['c-drive'] ? '▼' : '▶'} 💻 Ce PC &gt; Disque local (C:)
                </div>
                {openFolders['c-drive'] && (
                    <div className="pl-5">
                        <Folder name="Program Files" id="program-files">
                            <div>📄 chrome.exe</div>
                            <div>📄 vscode.exe</div>
                        </Folder>
                        <Folder name="Utilisateurs" id="users">
                           <Folder name="Eleve" id="eleve">
                                <div>📁 Bureau</div>
                                <div>📁 Documents</div>
                                <div>📁 Téléchargements</div>
                           </Folder>
                        </Folder>
                        <Folder name="Windows" id="windows">
                             <div>📄 system32</div>
                             <div>📄 explorer.exe</div>
                        </Folder>
                    </div>
                )}
            </div>
        </div>
    );
};
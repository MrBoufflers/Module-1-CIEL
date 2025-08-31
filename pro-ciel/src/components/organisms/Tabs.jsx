import { useState } from 'react';
import Tab from '../molecules/Tab';

export default function Tabs({ tabsConfig }) {
    const [activeTab, setActiveTab] = useState(tabsConfig[0].id);

    const activeContent = tabsConfig.find(tab => tab.id === activeTab)?.content;

    return (
        <div>
            <div className="border-b border-gray-200 mb-6">
                {tabsConfig.map(tab => (
                    <Tab 
                        key={tab.id}
                        label={tab.label}
                        isActive={activeTab === tab.id}
                        onClick={() => setActiveTab(tab.id)}
                    />
                ))}
            </div>
            <div>
                {activeContent}
            </div>
        </div>
    );
}
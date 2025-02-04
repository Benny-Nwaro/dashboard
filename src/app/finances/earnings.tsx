import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const FinancesPage: React.FC = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                
            </div>
        </div>
    );
};

export default FinancesPage;
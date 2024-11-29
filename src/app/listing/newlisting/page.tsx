import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import NewListing from "../../../components/NewListing";

export default function Listing() {
    return (
        <div className="min-h-screen flex">
            <Sidebar />
            <div className="flex-1 flex flex-col bg-gray-100">
                <Header />
                <NewListing />
            </div>
        </div>
    );
};
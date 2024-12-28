import { FaClock } from "react-icons/fa";

const CompanyHeader: React.FC<{ name: string; duration: string }> = ({
 name,
 duration
}) => (
    <div className="flex flex-col justify-center ml-4 sm:ml-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
            {name}
        </h3>
        <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full w-auto">
            <FaClock className="mr-2 text-sm" />
            <span className="text-sm font-medium whitespace-nowrap">
        Total Duration: {duration}
      </span>
        </div>
    </div>
);

export default CompanyHeader;
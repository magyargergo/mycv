import { Role } from "./types";

const RoleContent: React.FC<{ role: Role }> = ({ role }) => (
    <div className="mt-4 mb-4 sm:mb-6 ml-4 sm:ml-6">
        <h4 className="text-lg sm:text-xl font-semibold text-blue-700">
            {role.title}
        </h4>
        <ul className="list-disc ml-4 sm:ml-6 text-gray-700 text-sm sm:text-base text-justify">
            {role.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
            ))}
        </ul>
    </div>
);

export default RoleContent;
import CompanyHeader from "./CompanyHeader";
import RoleContent from "./RoleContent";
import { Company } from "./types";

const CompanyContent: React.FC<{ company: Company }> = ({ company }) => (
    <>
        <CompanyHeader name={company.name} duration={company.totalDuration} />
        {company.roles.map((role, index) => (
            <RoleContent key={index} role={role} />
        ))}
    </>
);

export default CompanyContent;
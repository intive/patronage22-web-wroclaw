import { BasicPagination } from "@patronage-web/shared";

import { DASHBOARD_ITEMS_PER_PAGE } from "../configs";

export const Dashboard: React.FC = () => {
  const handleChange = (page: number, size: number) => {
    // TODO replace with proper logic
  };

  return (
    <div>
      <BasicPagination itemsPerPageOptions={DASHBOARD_ITEMS_PER_PAGE} itemsCount={179} onChange={handleChange} />
    </div>
  );
};

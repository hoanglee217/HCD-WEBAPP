import React from "react";
import { useTranslation } from "react-i18next";
import Summary from "../components/summary/Summary";
import SaleChart from "../components/chart/Chart";
import DashboardTables from "../components/tables/DashboardTables";
import Button from "../components/UI/button/Button";
import useEnv from "../hook/useEnv";
import AxiosInstance from "../utils/AxiosInstance";
import RefreshTokenHandler from "../components/api/authentication/RefreshTokenHandler";

function Dashboard() {
  const { t } = useTranslation();

  const handleTest = () => {
    const apiUrl = useEnv.apiUrl;
    AxiosInstance.get(`${apiUrl}/api/test`);
  };
  const handleRefresh = async () => {
    const refreshToken = localStorage.getItem("refreshToken")!;
    await RefreshTokenHandler({ refreshToken: refreshToken });
  };

  return (
    <section>
      <h2 className="title">{t("dashboard")}</h2>

      <Button type="button" onClick={handleTest}>
        test api
      </Button>
      <Button type="button" onClick={handleRefresh}>
        test refresh api
      </Button>
      <Summary />
      <SaleChart />
      <DashboardTables />
    </section>
  );
}

export default Dashboard;

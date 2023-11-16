import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Widget } from "../../components/Common/Widget";
import { WidgetContent } from "../../components/Common/WidgetContent";
import { API } from "../../config";
import * as configurationService from "../../services/configuration-service";

interface ComplianceOverTimeProps {
  id: string;
  resultId: string;
}

function monthDayName(date: string) {
  const d = new Date(date);
  return format(d, "MMM dd");
}
export const ComplianceOverTime = observer<ComplianceOverTimeProps>(({ id, resultId }) => {
  const { t } = useTranslation();
  const [contentWidth, setContentWidth] = useState<number | null>(null);
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setContentWidth(contentRef.current?.clientWidth ?? null);
    setContentHeight(contentRef.current?.clientHeight ?? null);
  }, []);

  const [data, setData] = useState<configurationService.ServiceComplianceStatusOverTime[] | null>(null);
  useEffect(() => {
    (async () => {
      const response = await API.configurationService.plan.planIdResultsResultIdComplianceOverTimeGet(id, resultId);
      setData(response.data);
    })();
  }, [id, resultId]);

  const chartData = useMemo(
    () => (data ? data.map(({ date, ...item }) => ({ name: monthDayName(`${date}`), ...item })) : []),
    [data],
  );

  return (
    <Widget title={t("Compliance over Time")}>
      <WidgetContent ref={contentRef}>
        {contentWidth !== null && (
          <LineChart
            margin={{ top: 0, left: -30, right: 0, bottom: 0 }}
            width={contentWidth}
            height={contentHeight || 250}
            data={chartData}>
            <Line type="monotone" dataKey="findings" stroke="#0FB5AE" />
            <Line type="monotone" dataKey="observations" stroke="#4046CA" />
            <Line type="monotone" dataKey="risks" stroke="#DE3D82" />
            <XAxis dataKey="name" stroke="#B1B1B1" />
            <YAxis stroke="#B1B1B1" />
            <CartesianGrid vertical={false} stroke="" />
          </LineChart>
        )}
      </WidgetContent>
    </Widget>
  );
});

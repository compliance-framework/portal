"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultList = void 0;
var react_1 = require("react");
var react_i18next_1 = require("react-i18next");
var Widget_1 = require("../../components/Common/Widget");
var WidgetContent_1 = require("../../components/Common/WidgetContent");
var ResultList = function (_a) {
  var results = _a.results;
  var t = (0, react_i18next_1.useTranslation)().t;
  var toolbar = (
    <a href={""} className="underline">
      See All
    </a>
  );
  var items = (0, react_1.useMemo)(
    function () {
      return results.map(function (result) {
        var _a, _b, _c, _d;
        return {
          id: "".concat(result.id),
          compliant: true,
          title: "".concat(result.title),
          activityTitle: "TODO",
          description: "".concat(result.description),
          observations:
            (_b = (_a = result.observations) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0
              ? _b
              : 0,
          risks:
            (_d = (_c = result.risks) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0
              ? _d
              : 0, // TODO
        };
      });
    },
    [results],
  );
  // const items2 = [
  //   {
  //     id: "1",
  //     compliant: true,
  //     title: "Network Vulnerability Scan Result",
  //     activityTitle: "System Configuration Check",
  //     description:
  //       "This report outlines the findings from the conducted network vulnerability scan. Solutions have been proposed for all identified vulnerabilities to mitigate potential risks.",
  //     observations: 30,
  //     risks: 12,
  //   },
  //   {
  //     id: "1",
  //     compliant: false,
  //     title: "Network Vulnerability Scan Result",
  //     activityTitle: "System Configuration Check",
  //     description: "Solutions have been proposed for all identified vulnerabilities to mitigate potential risks.",
  //     observations: 10,
  //     risks: 1,
  //   },
  // ];
  return (
    <Widget_1.Widget title={t("widgets.assessment.result.list")} toolbar={toolbar}>
      <WidgetContent_1.WidgetContent>
        <div className="flex flex-col">
          {items.map(function (item) {
            return (
              <div className="flex flex-col border-b border-gray-500 py-4">
                <div className="flex flex-row justify-center">
                  <div className={"rounded-badge ".concat(item.compliant ? "bg-low" : "bg-high", " h-4 w-4")}></div>
                  <div className="mx-2 flex-grow text-bright">{item.title}</div>
                  <div className="text-right">
                    Activity: <span className="text-bright">{item.activityTitle}</span>
                  </div>
                </div>
                <div key={item.id} className="mt-4 flex flex-row">
                  <div className="mx-2 ml-6 flex-grow">{item.description}</div>
                  <div className="flex w-64 flex-col text-right">
                    <a>
                      <span className="mr-1 text-dim">{item.observations}</span>
                      <span className="underline">{"Observation" + (item.observations > 1 ? "s" : "")}</span>
                    </a>
                    <a>
                      <span className="mr-1 text-dim">{item.risks}</span>
                      <span className="text-high underline">{"Risk" + (item.risks > 1 ? "s" : "")}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </WidgetContent_1.WidgetContent>
    </Widget_1.Widget>
  );
};
exports.ResultList = ResultList;

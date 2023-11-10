"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingList = void 0;
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = require("react");
var react_i18next_1 = require("react-i18next");
var Widget_1 = require("../../components/Common/Widget");
var WidgetContent_1 = require("../../components/Common/WidgetContent");
var config_1 = require("../../config");
exports.FindingList = (0, mobx_react_lite_1.observer)(function (_a) {
  var id = _a.id,
    resultId = _a.resultId;
  var t = (0, react_i18next_1.useTranslation)().t;
  console.log("render findings");
  var toolbar = (
    <a href={""} className="underline">
      See All
    </a>
  );
  var _b = (0, react_1.useState)(null),
    data = _b[0],
    setData = _b[1];
  (0, react_1.useEffect)(
    function () {
      (function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var response;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [
                  4 /*yield*/,
                  config_1.API.configurationService.plan.planIdResultsResultIdFindingsGet(id, resultId),
                ];
              case 1:
                response = _a.sent();
                setData(response.data);
                return [2 /*return*/];
            }
          });
        });
      })();
    },
    [id, resultId],
  );
  var items = (0, react_1.useMemo)(
    function () {
      return data
        ? data.map(function (finding) {
            var _a;
            return {
              id: "".concat(finding.id),
              compliant: true,
              title: "".concat(finding.title),
              origin: "".concat((_a = finding.origins) === null || _a === void 0 ? void 0 : _a.join(", ")),
              activityTitle: "TODO",
              description: "".concat(finding.description),
              observations: 0,
              risks: 0, // TODO
            };
          })
        : [];
    },
    [data],
  );
  return (
    <Widget_1.Widget title={t("widgets.assessment.finding.list")} toolbar={toolbar}>
      <WidgetContent_1.WidgetContent>
        <div className="flex flex-col">
          {items.map(function (item) {
            return (
              <div className="flex flex-row border-b border-gray-500 py-2">
                <div className="mr-4 w-1/2">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <div className="w-1/4">
                  <span className="text-sm">Origin: </span>
                  <span className="text-lg text-bright">{item.origin}</span>
                </div>
                <div className="flex w-64 flex-col text-right">
                  <a className="text-neutral underline"> Related {item.observations} Observation(s)</a>
                  <a className="text-high underline"> Related {item.risks} Risks(s)</a>
                </div>
              </div>
            );
          })}
        </div>
      </WidgetContent_1.WidgetContent>
    </Widget_1.Widget>
  );
});

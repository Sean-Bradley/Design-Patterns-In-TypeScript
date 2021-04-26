"use strict";
// Observer Design Pattern Concept
Object.defineProperty(exports, "__esModule", { value: true });
const data_controller_1 = require("./data-controller");
const data_model_1 = require("./data-model");
const data_view_1 = require("./data-view");
// A local data view that the hypothetical external controller updates
const DATA_MODEL = new data_model_1.DataModel();
// Add some visualisation that use the dataview
const PIE_GRAPH_VIEW = new data_view_1.PieGraphView(DATA_MODEL);
const BAR_GRAPH_VIEW = new data_view_1.BarGraphView(DATA_MODEL);
const TABLE_VIEW = new data_view_1.TableView(DATA_MODEL);
// A hypothetical data controller running in a different process
const DATA_CONTROLLER = new data_controller_1.DataController(); // (Singleton)
// The hypothetical external data controller updates some data
DATA_CONTROLLER.notify([1, 2, 3]);
// Client now removes a local BAR_GRAPH
BAR_GRAPH_VIEW.delete();
// The hypothetical external data controller updates the data again
DATA_CONTROLLER.notify([4, 5, 6]);

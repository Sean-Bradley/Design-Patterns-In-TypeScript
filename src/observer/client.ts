// Observer Design Pattern Concept

import { DataController } from './data-controller'
import { DataModel } from './data-model'
import { BarGraphView, PieGraphView, TableView } from './data-view'

// A local data view that the hypothetical external controller updates
const DATA_MODEL = new DataModel()

// Add some visualisation that use the dataview
const PIE_GRAPH_VIEW = new PieGraphView(DATA_MODEL)
const BAR_GRAPH_VIEW = new BarGraphView(DATA_MODEL)
const TABLE_VIEW = new TableView(DATA_MODEL)

// A hypothetical data controller running in a different process
const DATA_CONTROLLER = new DataController() // (Singleton)

// The hypothetical external data controller updates some data
DATA_CONTROLLER.notify([1, 2, 3])

// Client now removes a local BAR_GRAPH
BAR_GRAPH_VIEW.delete()

// The hypothetical external data controller updates the data again
DATA_CONTROLLER.notify([4, 5, 6])

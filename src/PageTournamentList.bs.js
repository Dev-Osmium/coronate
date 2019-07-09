// Generated by BUCKLESCRIPT VERSION 6.0.3, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Nanoid from "nanoid";
import * as Dialog from "@reach/dialog";
import * as ReactFeather from "react-feather";
import * as Belt_MapString from "bs-platform/lib/es6/belt_MapString.js";
import * as Hooks$Coronate from "./Hooks.bs.js";
import * as Utils$Coronate from "./Utils.bs.js";
import * as Window$Coronate from "./Window.bs.js";
import * as VisuallyHidden from "@reach/visually-hidden";

function s(prim) {
  return prim;
}

var dateSort = /* KeyDate */Block.__(3, [(function (prim) {
        return prim.date;
      })]);

var nameSort = /* KeyString */Block.__(0, [(function (prim) {
        return prim.name;
      })]);

function PageTournamentList(Props) {
  var match = Hooks$Coronate.Db[/* useAllTournaments */8](/* () */0);
  var dispatch = match[1];
  var tourneys = match[0];
  var match$1 = Hooks$Coronate.useSortedTable(Belt_MapString.valuesToArray(tourneys), dateSort, true);
  var sortDispatch = match$1[1];
  var sorted = match$1[0];
  var match$2 = React.useState((function () {
          return "";
        }));
  var setNewTourneyName = match$2[1];
  var newTourneyName = match$2[0];
  var match$3 = React.useState((function () {
          return false;
        }));
  var setIsDialogOpen = match$3[1];
  var match$4 = Window$Coronate.useWindowContext(/* () */0);
  var windowDispatch = match$4[1];
  React.useEffect((function () {
          Curry._1(windowDispatch, /* SetTitle */Block.__(5, ["Tournament list"]));
          return (function (param) {
                    return Curry._1(windowDispatch, /* SetTitle */Block.__(5, [""]));
                  });
        }), /* array */[windowDispatch]);
  React.useEffect((function () {
          Curry._1(sortDispatch, /* SetTable */Block.__(2, [Belt_MapString.valuesToArray(tourneys)]));
          return undefined;
        }), /* tuple */[
        tourneys,
        sortDispatch
      ]);
  var updateNewName = function ($$event) {
    Curry._1(setNewTourneyName, $$event.currentTarget.value);
    return /* () */0;
  };
  var makeTournament = function ($$event) {
    $$event.preventDefault();
    var newId = Nanoid.default();
    var newTourney = {
      byeQueue: /* array */[],
      date: new Date(),
      id: newId,
      name: newTourneyName,
      playerIds: /* array */[],
      roundList: /* array */[],
      tieBreaks: /* array */[
        0,
        1,
        2
      ]
    };
    Curry._1(dispatch, /* SetItem */Block.__(1, [
            newId,
            newTourney
          ]));
    Curry._1(setNewTourneyName, (function (param) {
            return "";
          }));
    Curry._1(setIsDialogOpen, (function (param) {
            return false;
          }));
    return /* () */0;
  };
  var match$5 = Belt_MapString.isEmpty(tourneys);
  return React.createElement(Window$Coronate.WindowBody[/* make */0], {
              children: React.createElement("div", {
                    className: "content-area"
                  }, React.createElement("div", {
                        className: "toolbar toolbar__left"
                      }, React.createElement("button", {
                            onClick: (function (param) {
                                return Curry._1(setIsDialogOpen, (function (param) {
                                              return true;
                                            }));
                              })
                          }, React.createElement(ReactFeather.Plus, { }), " Add tournament")), match$5 ? React.createElement("p", undefined, "No tournaments are added yet.") : React.createElement("table", undefined, React.createElement("caption", undefined, "Tournament list"), React.createElement("thead", undefined, React.createElement("tr", undefined, React.createElement("th", undefined, React.createElement(Hooks$Coronate.SortButton[/* make */0], {
                                          children: "Name",
                                          sortKey: nameSort,
                                          data: sorted,
                                          dispatch: sortDispatch
                                        })), React.createElement("th", undefined, React.createElement(Hooks$Coronate.SortButton[/* make */0], {
                                          children: "Date",
                                          sortKey: dateSort,
                                          data: sorted,
                                          dispatch: sortDispatch
                                        })), React.createElement("th", undefined, React.createElement(VisuallyHidden.default, {
                                          children: "Controls"
                                        })))), React.createElement("tbody", {
                              className: "content"
                            }, sorted[/* table */2].map((function (t) {
                                    return React.createElement("tr", {
                                                key: t.id,
                                                className: "buttons-on-hover"
                                              }, React.createElement("td", undefined, React.createElement("a", {
                                                        href: "#/" + t.id
                                                      }, t.name)), React.createElement("td", undefined, React.createElement(Utils$Coronate.DateFormat[/* make */0], {
                                                        date: t.date
                                                      })), React.createElement("td", undefined, React.createElement("button", {
                                                        "aria-label": "Delete " + t.name,
                                                        className: "danger button-ghost",
                                                        title: "Delete " + t.name,
                                                        onClick: (function (param) {
                                                            var id = t.id;
                                                            var name = t.name;
                                                            var message = "Are you sure you want to delete “" + (String(name) + "”?");
                                                            if (window.confirm(message)) {
                                                              Curry._1(dispatch, /* DelItem */Block.__(0, [id]));
                                                            }
                                                            return /* () */0;
                                                          })
                                                      }, React.createElement(ReactFeather.Trash2, { }))));
                                  })))), React.createElement(Dialog.Dialog, {
                        isOpen: match$3[0],
                        onDismiss: (function (param) {
                            return Curry._1(setIsDialogOpen, (function (param) {
                                          return false;
                                        }));
                          }),
                        children: null
                      }, React.createElement("button", {
                            className: "button-micro",
                            onClick: (function (param) {
                                return Curry._1(setIsDialogOpen, (function (param) {
                                              return false;
                                            }));
                              })
                          }, "Close"), React.createElement("form", {
                            onSubmit: makeTournament
                          }, React.createElement("fieldset", undefined, React.createElement("legend", undefined, "Make a new tournament"), React.createElement("label", {
                                    htmlFor: "tourney-name"
                                  }, "Name:"), React.createElement("input", {
                                    id: "tourney-name",
                                    name: "tourney-name",
                                    placeholder: "tournament name",
                                    required: true,
                                    type: "text",
                                    value: newTourneyName,
                                    onChange: updateNewName
                                  }), " ", React.createElement("input", {
                                    className: "button-primary",
                                    type: "submit",
                                    value: "Create"
                                  })))))
            });
}

var make = PageTournamentList;

export {
  s ,
  dateSort ,
  nameSort ,
  make ,
  
}
/* react Not a pure module */

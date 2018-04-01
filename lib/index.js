"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var videocontext_1 = require("videocontext");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(props) {
        var _this = _super.call(this, props) || this;
        if (props.canvasId) {
            _this.canvasId = props.canvasId;
        }
        else {
            _this.canvasId = 'webgl_player_canvas';
        }
        return _this;
    }
    Player.prototype.componentDidMount = function () {
        this.canvas = document.getElementById(this.canvasId);
        this.ctx = new videocontext_1["default"](this.canvas);
        this.ctx.registerCallback('ended', this.videocontextEnded);
    };
    Player.prototype.videocontextEnded = function () {
    };
    Player.prototype.render = function () {
        var canvasId = this.props.canvasId;
        return (React.createElement("canvas", { id: canvasId || "webgl-player-canvas" }));
    };
    return Player;
}(react_1.PureComponent));
exports["default"] = Player;

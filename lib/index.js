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
        _this.videoNodeStateLoad = function () {
            console.log('load');
        };
        _this.videoNodeStateLoaded = function () {
            console.log('loaded');
        };
        _this.renderVideoBySource = function (source) {
            if (typeof source === 'string') {
                var videoNode = _this.ctx.video(source, 0);
                videoNode.start(0);
                videoNode.stop(100);
                videoNode.registerCallback('load', _this.videoNodeStateLoad);
                videoNode.registerCallback('loaded', _this.videoNodeStateLoaded);
                videoNode.connect(_this.ctx.destination);
            }
            // this.ctx.play();
        };
        _this.resetPlayer = function () {
            _this.ctx.reset();
        };
        _this.canvasId = props.canvasId || 'webgl_player_canvas';
        return _this;
    }
    Player.prototype.componentDidMount = function () {
        var _a = this.props, source = _a.source, size = _a.size;
        this.canvas = document.getElementById(this.canvasId);
        this.canvas.width = size.width;
        this.canvas.height = size.height;
        this.ctx = new videocontext_1["default"](this.canvas);
        this.renderVideoBySource(source);
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

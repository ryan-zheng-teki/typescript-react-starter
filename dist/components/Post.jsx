"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var macro_1 = require("@lingui/macro");
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            user: "Ryan",
            message: "Hello"
        };
        return _this;
    }
    Post.prototype.render = function () {
        return (<div>
                <h1><macro_1.Trans>This is not correct</macro_1.Trans></h1>
                <p>this.state.user</p>
                <textarea>this.state.message</textarea>
            </div>);
    };
    return Post;
}(React.Component));
exports.Post = Post;
//# sourceMappingURL=Post.jsx.map
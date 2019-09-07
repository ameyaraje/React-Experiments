"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisonApp = function (_React$Component) {
  _inherits(IndecisonApp, _React$Component);

  function IndecisonApp() {
    _classCallCheck(this, IndecisonApp);

    return _possibleConstructorReturn(this, (IndecisonApp.__proto__ || Object.getPrototypeOf(IndecisonApp)).apply(this, arguments));
  }

  _createClass(IndecisonApp, [{
    key: "render",
    value: function render() {
      var title = "Indecision App";
      var subtitle = "You're a slave now";
      var options = ['One', 'Two', 'Three'];

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, null),
        React.createElement(Options, { options: options }),
        React.createElement(AddOption, null)
      );
    }
  }]);

  return IndecisonApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "handleClick",
    value: function handleClick() {
      alert("Button clicked");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.handleClick },
          "What do I do?"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options(props) {
    _classCallCheck(this, Options);

    var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

    _this4.removeAll = _this4.removeAll.bind(_this4);
    return _this4;
  }

  _createClass(Options, [{
    key: "removeAll",
    value: function removeAll() {
      console.log(this.props.options);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.removeAll },
          "Remove All"
        ),
        React.createElement(
          "p",
          null,
          "Options Component here with length " + this.props.options.length
        ),
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: option, opText: option });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          this.props.opText
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this6.handleTextEntered = _this6.handleTextEntered.bind(_this6);
    return _this6;
  }

  _createClass(AddOption, [{
    key: "handleTextEntered",
    value: function handleTextEntered(e) {
      e.preventDefault();
      var optionText = e.target.elements.option.value.trim(); // e -> event; e.target -> <form>; e.target.elements -> [<element>....<element>]; e.target.elements."name-of-option".value -> shiz we want
      if (optionText) {
        alert(optionText);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.handleTextEntered },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "AddOption"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisonApp, null), document.getElementById('app'));

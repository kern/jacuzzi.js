(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  typeof jacuzzi != "undefined" && jacuzzi !== null ? jacuzzi : jacuzzi = {};
  jacuzzi.EventPool = function() {
    function EventPool() {
      this.trigger = __bind(this.trigger, this);;
      this.unbind = __bind(this.unbind, this);;
      this.bind = __bind(this.bind, this);;
    }
    EventPool.prototype.bind = function(name, fn) {
      var _base, _ref, _ref2;
      (_ref = this.events) != null ? _ref : this.events = {};
      (_ref2 = (_base = this.events)[name]) != null ? _ref2 : _base[name] = [];
      this.events[name].push(fn);
      return this;
    };
    EventPool.prototype.unbind = function(name, fn) {
      var i, _ref;
      (_ref = this.events) != null ? _ref : this.events = {};
      if (this.events[name] != null) {
        i = 0;
        while (i < this.events.length) {
          if (this.events[i] === fn) {
            originalArray.splice(i, 1);
          } else {
            i++;
          }
        }
      }
      return this;
    };
    EventPool.prototype.trigger = function(name, data) {
      var fn, _i, _len, _ref, _ref2;
      data != null ? data : data = {};
      (_ref = this.events) != null ? _ref : this.events = {};
      if (this.events[name] != null) {
        _ref2 = this.events[name];
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          fn = _ref2[_i];
          if (fn.call(this, data) === false) {
            break;
          }
        }
      }
      return this;
    };
    return EventPool;
  }();
}).call(this);

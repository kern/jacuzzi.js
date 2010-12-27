jacuzzi ?= {}

class jacuzzi.EventPool
  bind: (name, fn) =>
    @events ?= {}
    
    @events[name] ?= []
    @events[name].push fn
    
    @
  
  unbind: (name, fn) =>
    @events ?= {}
    
    if @events[name]?
      i = 0
      while i < @events.length
        if @events[i] == fn
          originalArray.splice i, 1
        else
          i++
    
    @
  
  trigger: (name, data) =>
    data ?= {}
    @events ?= {}
    
    if @events[name]?
      for fn in @events[name]
        break if fn.call(@, data) == false
    
    @
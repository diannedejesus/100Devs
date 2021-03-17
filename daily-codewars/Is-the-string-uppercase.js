String.prototype.isUpperCase = function() {
    return [...this].join("").toUpperCase() === [...this].join("")
  }
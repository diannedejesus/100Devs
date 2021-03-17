function enough(cap, on, wait) {
    return on + wait > cap ? (wait + on) - cap  : 0
  }
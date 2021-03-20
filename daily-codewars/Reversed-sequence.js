const reverseSeq = n => {
  return Array.from({length: n}, (v, i) => n-i);
};
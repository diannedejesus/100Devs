function DNAtoRNA(dna) {
  return dna.split("").map(el => el.replace("T", "U")).join("")
}
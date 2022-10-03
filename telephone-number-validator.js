function telephoneCheck(str) {
  const regExpressions = /^1?\s?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/gm

  return regExpressions.test(str)
}

console.log(telephoneCheck("555-555-5555"))



/*555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/
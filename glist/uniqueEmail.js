const numUniqueEmails = function (emails) {
  const uniqueList = new Set()

  emails.forEach((email) => {
    let [localName, domainName] = email.split('@')
    if (localName[0] === '+') return
    if (domainName.split('.').pop() !== 'com') return
    localName = localName.split('+')[0].replace(/\./g, '')

    uniqueList.add(`${localName}@${domainName}`)
  })
  console.log(uniqueList)
  return uniqueList.size
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"
  ])
)
console.log(
  numUniqueEmails(
    [
      "fg.r.u.uzj +o.pw  @kziczvh.com",
      "fg.r.u.uzj +o.f.d @kziczvh.com",
      "fg.r.u.uzj +lp.k  @kziczvh.com",
      "fg.r.u.uzj +k+p.j @kziczvh.com",
      "fg.r.u.uzj +w.y+b @kziczvh.com",
      "fg.r.u.uzj +vq.o  @kziczvh.com",
      "fg.r.u.uzj +uzq   @kziczvh.com",
      "fg.r.u.uzj +mvz   @kziczvh.com",
      "fg.r.u.uzj +taj   @kziczvh.com",
      "fg.r.u.uzj +fek   @kziczvh.com",
      "r.cyo.g +ng.r.iq   @tgsg.z.com",
      "r.cyo.g +d.h+b.ja  @tgsg.z.com",
      "r.cyo.g +brxxi     @tgsg.z.com",
      "r.cyo.g +z+dr.k.u  @tgsg.z.com",
      "r.cyo.g +d+l.c.n+g @tgsg.z.com",
      "r.cyo.g +x+d.c+f.t @tgsg.z.com",
      "r.cyo.g +x+t.y.l.i @tgsg.z.com",
      "r.cyo.g +n.h.e+n.g @tgsg.z.com",
    ]
  )
)






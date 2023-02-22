const name = '${name}'
const email = '${email}'
const github = '${github}'
const linkedin = '${linkedin}'
const uses = '${uses}'
const template = '`'

export const code  = `import whoIam from 'maicol-santos'

function getFullInfo() {
  const {
    name,
    email,
    github,
    linkedin,
    uses,
  } = whoIam()

  return ${template}
    <h1>${name}</h1>
    <a href="mailto:${email}">${email}</a>
    <a href="${github}>${github}</a>
    <a href="${linkedin}">${linkedin}</a>
    <a href="${uses}">${uses}</a>
  ${template}
}

getFullInfo()
`

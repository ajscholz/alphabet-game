import { useStaticQuery, graphql } from "gatsby"

const useAlphabet = () => {
  const {
    data: { letters },
  } = useStaticQuery(graphql`
    {
      data: allFile(
        filter: { relativeDirectory: { eq: "alphabet" } }
        sort: { fields: name, order: ASC }
      ) {
        letters: nodes {
          file: publicURL
          letter: name
        }
      }
    }
  `)
  return letters.map((letter, i) => {
    return { ...letter, index: i }
  })
}

export default useAlphabet

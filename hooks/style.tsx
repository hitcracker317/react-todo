export const roundFull = (size) => {
  return `
    width: ${size}rem;
    height: ${size}rem;
    border-radius: 50%;
  `
}

export const padding16px20px = () => {
  return `
    padding: 1.6rem 2rem;
  `
}

export const mixins = {
  roundFull,
  padding16px20px
}
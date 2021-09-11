export const handleFee = (num) => {
  const round = (total) => Math.round(total * 100) / 100;

  return num <= 100000 
    ? round((num * 0.0075) / 12)
    : num > 100000 
    ? round( 62.5 + (((num-100000) * 0.0056)/12))
    : 0
}

export default handleFee
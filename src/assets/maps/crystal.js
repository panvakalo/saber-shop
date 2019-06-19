export function crystalConfig (color) {
  if (color === 'red') {
    return {
      powerMultiplier: 0.2,
      priceMultiplier: 101
    }
  } else if (color === 'blue') {
    return {
      powerMultiplier: 0.19,
      priceMultiplier: 10
    }
  } else {
    return {
      powerMultiplier: 0.22,
      priceMultiplier: 37
    }
  }
}

export const getEtherBalance = async (address) => {
  const settings = {
    method: 'GET',
  }
  try {
    const res = await fetch(
      `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API}`,
      settings
    )
    const data = await res.json()
    return data.result
  } catch (error) {
    console.error(error)
    return false
  }
}
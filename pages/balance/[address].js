import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import { getEtherBalance } from '../../lib/etherscan'
import { useRouter } from 'next/router'

const Address = () => {
  const router = useRouter()
  const { address } = router.query
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    address && getBalance(address)
  }, [address])

  const getBalance = async (address) => {
    let balance = await getEtherBalance(address)
    setBalance(balance)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Querying balance for:</h1>
        <h3>{address}</h3>
        <h5>{balance / 1e18} ETH</h5>
      </main>
    </div>
  )
}

export default Address

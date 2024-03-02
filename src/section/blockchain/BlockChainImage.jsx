import React from 'react'
import blockchainimage from "@/styles/assets/114.svg"

const BlockChainImage = () => {
  return (
    <div className='blockchain_image'>
      <img src={blockchainimage.src} alt={blockchainimage.src}/>
    </div>
  )
}

export default BlockChainImage
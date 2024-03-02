import React, { useState } from 'react';
import one from '@/styles/assets/115.svg'
import two from '@/styles/assets/116.svg'
import three from '@/styles/assets/117.svg'
import four from '@/styles/assets/118.svg'
import five from '@/styles/assets/119.svg'
import six from '@/styles/assets/120.svg'

const BlockChainPlatform = () => {
  const [index,setIndex] = useState(1)

  const services = [
    {
      id:1,
      src:one.src,
      title:'Ethereum'
    },
    {
      id:2,
      src:two.src,
      title:'Hyperledger'
    },
    {
      id:3,
      src:three.src,
      title:'Corda'
    },
    {
      id:4,
      src:four.src,
      title:'Tezos'
    },
    {
      id:5,
      src:five.src,
      title:'Stellar'
    },
    {
      id:6,
      src:six.src,
      title:'EOS'
    },
  ]

  const servicesDes = [
    {id:1,description:'Ethereum offers a secure environment to develop your applications, providing access to a vibrant platform recognized worldwide for its extensive use in finance-related operations. With Ethereum, you can confidently write code and leverage a robust ecosystem, ensuring the reliability and scalability of your blockchain projects.'},
    {id:2,description:'Experience the collaborative force of Hyperledger, providing robust support for distributed ledger development. Unlock the transformative capabilities of blockchain technology as you embark on your journey. Empower your projects with the backing of a vibrant community, pioneering innovation in decentralized solutions.'},
    {id:3,description:'Step into the world of enterprise blockchain development with Corda. Built for secure and private transactions between businesses, Corda offers a reliable platform tailored to your specific needs. Join a thriving ecosystem and harness the power of distributed ledger technology for your business solutions.'},
    {id:4,description:'Tezos opens the door to self-amending blockchain development adventures. With on-chain governance and formal verification at its core, Tezos offers a secure and adaptable environment for decentralized application creation. Collaborate with an enthusiastic community committed to driving blockchain progress through innovation.'},
    {id:5,description:'Explore the possibilities of cross-border payments and asset transfers with Stellar. Leveraging its decentralized exchange and built-in token issuance, Stellar offers a seamless platform for financial transactions. Join a growing network of users and developers driving innovation in global finance.'},
    {id:6,description:"Elevate your blockchain projects with EOSIO, offering a cutting-edge platform for building decentralized applications. With EOSIO's high-performance infrastructure, you can create scalable and efficient solutions tailored to your needs. Join a thriving ecosystem of developers and pioneers pushing the boundaries of blockchain technology forward."},
  ]
  
  return (
    <div className='blockchain_platform'>
        <div className='blockchain_platform_container'>
            <h2>Blockchain development platforms</h2>
            <div className='blockchain_cards'>
              {services.map((items)=>(

                <div onClick={()=>setIndex(items.id)} key={items.id} className={index===items.id?'blockchain_cards_active':'blockchain_cards_splits'}>
                    <img src={items.src} alt={items.src} />
                    <p>{items.title}</p>
                </div>

              ))}
            </div>
             {servicesDes.map((items)=>(
              <div key={items.id}>
              {items.id === index? <p key={items.id}>{items.description}</p> : ""}
              </div>
             ))}
        </div>
    </div>
  )
}

export default BlockChainPlatform
'use client'

import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import WalletProvider from '@/providers/WalletProvider'
import { ethers } from 'ethers'

const Providers: React.FC<{ children?: React.ReactNode }> = ({ children }) => {

  const library = (provider: any) => {
    const lib = new ethers.providers.Web3Provider(provider)
    lib.pollingInterval = 12000
    return lib
  }

  return (
    <>
      <Web3ReactProvider getLibrary={library}>
        <WalletProvider>
          { children }
        </WalletProvider>
      </Web3ReactProvider>
    </>
  )
}

export default Providers

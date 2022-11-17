import React from 'react'
import wallet from '../assets/wallet.png'
import Crowdfunding from '../assets/crowdfunding.png'
import cryptocurrencies from '../assets/cryptocurrencies.png'
import Insurtech from '../assets/life-insurance.png'
import Roboadvisors from '../assets/Robo-advisors.png'
import stocks from '../assets/stocks.png'
import "./services.css";




function Services() {
  return (
    <div className='max-w-[1240px] mx-auto text-white mt-40 mb-40'>
          <h1 className='text-center text-orange font-bold text-6xl'>Our Services</h1>

          <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-20'>
                     <div class='icons-services'>
                       <img src={wallet}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-3xl my-6 text-orange text-center'>Mobile wallets and payment apps</h3>
                      <p className='text-black text-xl text-center font-medium'>We allow peers to transfer money to each other or merchants receive payments from customers.</p>
                  </div>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-20'>
                      <div class='icons-services'>
                       <img src={Crowdfunding }  alt='/'/>
                      </div>
                      <h3 className='font-bold text-3xl my-6 text-orange text-center'>Crowdfunding</h3>
                      <p className='text-black text-xl text-center font-medium'>have disrupted traditional funding options by allowing platform users to invest their money in businesses, products and individuals.</p>
                  </div>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-20'>
                     <div class='icons-services'>
                       <img src={cryptocurrencies}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-3xl my-6 text-orange text-center'>Cryptocurrency and blockchain</h3>
                      <p className='text-black text-xl text-center font-medium '>Cryptocurrency exchanges, such as Coinbase and Gemini, allow users to buy or sell cryptocurrencies. Blockchain technologies also have the potential to move into industries outside of finance to reduce fraud</p>
                  </div>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-20'>
                  <div class='icons-services'>
                       <img src={Insurtech}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-3xl my-6 text-orange text-center'>Insurtech</h3>
                      <p className='text-black text-xl text-center font-medium '>We aim to  make it easier for customers to buy insurance products including life insurance and policies for small businesses.</p>
                  </div>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-20'>
                  <div class='icons-services'>
                       <img src={Roboadvisors}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-3xl my-6 text-orange text-center'>Robo-advisors</h3>
                      <p className='text-black text-xl text-center font-medium'>consist of algorithm-based portfolio recommendations and management to lower costs and increase efficiency. Some popular robo-advising services</p>
                  </div>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-20'>
                  <div class='icons-services'>
                       <img src={stocks}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-3xl my-6 text-orange text-center'>Stock trading apps</h3>
                      <p className='text-black text-xl text-center font-medium'>We have become a popular and innovative example of fintech as investors can trade stocks from anywhere with their mobile device instead of visiting a stockbroker.</p>
                  </div>
                  
              </div>
          </div>
      </div>
  )
}

export default Services
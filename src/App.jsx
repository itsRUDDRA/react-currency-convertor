import { useState } from 'react'
import  useCurrencyinfo  from "../hooks/useCurrencyinfo"
import  {InputBox}  from './components'


function App() {
  const [amount, setAmount] = useState("")
  const [from,setFrom]=useState("usd")
  const [to, setTo]=useState("inr") 
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyinfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    if(amount!== ""){
    setConvertedAmount(amount)
    setAmount(convertedAmount)  
      }
    }

  const convert = () => {
    if(amount === "")return
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
        <div
            className="w-full h-screen flex justify-between items-center px-16 bg-cover bg-no-repeat "
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/35861285/pexels-photo-35861285.jpeg')`,
            }}
        >
            <div className="w-full h-full flex flex-col items-center justify-between py-8">
                <div />
                <div className="w-full max-w-md border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 ">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange = {(curr) => {
                                  setFrom(curr)
                                }}
                                selectCurrency={from}
                                onAmountChange={(amount) =>
                                    setAmount(amount)}
                                />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-black text-white px-2 py-0.5 hover:scale-105 hover:bg-amber-800 transition-all duration-50"
                                onClick={swap}
                                >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange = {(curr) => {
                                    setTo(curr)
                                }}
                                selectCurrency={to}
                                amountDisabl={true}
                            />
                        </div>
                        <button type="submit" 
                        className="w-full bg-black text-white px-4 py-3 rounded-lg hover:bg-amber-800 hover:scale-105 transition-all duration-200">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}!
                        </button>
                     </form>
                 </div>
                  <footer className="w-full text-center pb-4 text-white/60 text-sm">
                    <div className="w-1/2 mx-auto h-px bg-amber-600/50 mb-3" />
                     © 2026 Made by <span className="text-amber-500/75 font-semibold">RUDRA KARELIA</span>. All rights reserved.
                  </footer>
            </div>
        </div>
    )
}

export default App

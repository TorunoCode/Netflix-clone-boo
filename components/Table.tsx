import { CheckIcon } from "@heroicons/react/24/outline"
import { Product } from "@stripe/firestore-stripe-payments"
import { useState } from "react"
import useAuth from "../hooks/useAuth"

interface Props {
    products: Product[]
    selectedPlan1: true
    selectedPlan2: false
    selectedPlan3: false    
}
function Table({products,selectedPlan1,selectedPlan2,selectedPlan3 }:Props) {
    const {logout} = useAuth()
    // const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2])
  return (
    <table>
        <tbody className="divide-y divide-[gray]">
            <tr className="tableRow">
                <td className="tableDataTitle">Monthly price</td>
                <td className={`tableDataFeature text-[#E50914] ${
                selectedPlan1 === true
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}>AED</td>
                <td className={`tableDataFeature ${
                selectedPlan2
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}>AED</td>
                <td className={`tableDataFeature ${
                selectedPlan3
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}>AED</td>
            </tr>
            <tr className="tableRow">
                <td className="tableDataTitle">Video quality</td>
                <td className={`tableDataFeature text-[#E50914] ${
                selectedPlan1
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}>Good</td>
                <td className={`tableDataFeature ${
                selectedPlan2
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}>Best</td>
                <td className={`tableDataFeature ${
                selectedPlan3
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}>Better</td>
            </tr>
            <tr className="tableRow">
                <td className="tableDataTitle">Resolution</td>
                <td className={`tableDataFeature text-[#E50914] ${
                selectedPlan1
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}>480p</td>
                <td className={`tableDataFeature ${
                selectedPlan2
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}>4K+HDR</td>
                <td className={`tableDataFeature ${
                selectedPlan3
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}>1080p</td>
            </tr>
            <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
         
            <td
              className={`tableDataFeature  text-[#E50914] ${
                selectedPlan1
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}             
            >              
                <CheckIcon className="inline-block h-8 w-8" />              
            </td>
            <td
              className={`tableDataFeature ${
                selectedPlan1
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}             
            >              
                <CheckIcon className="inline-block h-8 w-8" />              
            </td>
            <td
              className={`tableDataFeature ${
                selectedPlan1
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}             
            >              
                <CheckIcon className="inline-block h-8 w-8" />              
            </td>
          
        </tr>
        </tbody>
    </table>
  )
}

export default Table
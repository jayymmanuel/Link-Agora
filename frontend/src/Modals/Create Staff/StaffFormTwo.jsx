// Importing the React library, which is required for creating and working with React components.
import React from "react";

// Importing the useState hook from the React library.
// - The useState hook allows functional components to manage state.
import { useState } from "react";


// Importing React Icon(s)
import { RiMapPin2Line } from "react-icons/ri";
import { RiMapPin2Fill } from "react-icons/ri";
import { LiaGlobeAfricaSolid } from "react-icons/lia";
import { TbMailbox } from "react-icons/tb";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineTerrain } from "react-icons/md";


const StaffFormTwo = () => { 

    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [postalCode, setPostalCode] = useState('') 
    const [country, setCountry] = useState('')  

    const handleAddress1Change = (event) => {
        setAddress1(sanitizeInput(event.target.value)); 
    }; 

    const handleAddress2Change = (event) => {
        setAddress2(sanitizeInput(event.target.value)); 
    }; 

    const handleCityChange = (event) => { 
        setCity(sanitizeInput(event.target.value)); 
    }; 

    const handleProvinceChange = (event) => {
        setProvince(sanitizeInput(event.target.value)); 
    }; 

    const handlePostalCodeChange = (event) => {
        setPostalCode(sanitizeInput(event.target.value)); 
    }; 

    const handleCountryChange = (event) => { 
        setCountry(sanitizeInput(event.target.value)); 
    }; 
 
    const jsxStaffFormTwo = (
        <div>
            <div className="mt-10"> 
                  {/* Staff Address 1 */}
                  <div class="flex items-center mb-4">
                    <div className="w-[16rem]">
                            <label
                        for="website-admin"
                        class="text-sm font-medium text-white mr-2"
                    >
                        Address 1
                    </label>        
                    </div>

                    <div class="flex w-full">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-zinc-600 rounded-l-md">
                        <RiMapPin2Line size={20} color="gray" />
                        </span>
                        <input
                        type="text"
                        id="website-admin"
                        class="rounded-none rounded-r-lg border border-zinc-600 text-white bg-zinc-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full h-[3.7rem] text-sm p-2.5"
                        placeholder="Enter address 1" 
                        />
                    </div>
                </div>
                {/* //---- endof ----// */}  

                  {/* Staff Address 2 */}
                  <div class="flex items-center mb-4">
                    <div className="w-[16rem]">
                            <label
                        for="website-admin"
                        class="text-sm font-medium text-white mr-2"
                    >
                        Address 2
                    </label>        
                    </div>

                    <div class="flex w-full">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-zinc-600 rounded-l-md">
                        <RiMapPin2Fill size={20} color="gray" />
                        </span>
                        <input
                        type="text"
                        id="website-admin"
                        class="rounded-none rounded-r-lg border border-zinc-600 text-white bg-zinc-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full h-[3.7rem] text-sm p-2.5"
                        placeholder="Enter address 2" 

                        />
                    </div>
                </div>
                {/* //---- endof ----// */}  

                  {/* Staff City */}
                  <div class="flex items-center mb-4">
                    <div className="w-[16rem]">
                            <label
                        for="website-admin"
                        class="text-sm font-medium text-white mr-2"
                    >
                        City
                    </label>        
                    </div>

                    <div class="flex w-full">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-zinc-600 rounded-l-md">
                        <FaRegBuilding size={20} color="gray" />
                        </span>
                        <input
                        type="text"
                        id="website-admin"
                        class="rounded-none rounded-r-lg border border-zinc-600 text-white bg-zinc-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full h-[3.7rem] text-sm p-2.5"
                        placeholder="Enter city" 

                        />
                    </div>
                </div>
                {/* //---- endof ----// */}  

                                 {/* Staff Country  */}
                                 <div class="flex items-center mb-4">
                    <div className="w-[16rem]">
                            <label
                        for="website-admin"
                        class="text-sm font-medium text-white mr-2"
                    >
                        Country of Residence
                    </label>        
                    </div>

                    <div class="flex w-full">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-zinc-600 rounded-l-md">
                        <LiaGlobeAfricaSolid size={20} color="gray" />
                        </span>
                        <input
                        type="text"
                        id="website-admin"
                        class="rounded-none rounded-r-lg border border-zinc-600 text-white bg-zinc-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full h-[3.7rem] text-sm p-2.5"
                        placeholder="Enter country" 

                        />
                    </div>
                </div>
                {/* //---- endof ----// */} 


                  {/* Staff Province */}
                  <div class="flex items-center mb-4">
                    <div className="w-[16rem]">
                            <label
                        for="website-admin"
                        class="text-sm font-medium text-white mr-2"
                    >
                        Province
                    </label>        
                    </div>

                    <div class="flex w-full">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-zinc-600 rounded-l-md">
                        <MdOutlineTerrain size={20} color="gray" />
                        </span>
                        <input
                        type="text"
                        id="website-admin"
                        class="rounded-none rounded-r-lg border border-zinc-600 text-white bg-zinc-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full h-[3.7rem] text-sm p-2.5"
                        placeholder="Enter province" 

                        />
                    </div>
                </div>  
                {/* //---- endof ----// */}  


                  {/* Staff Postal Code  */}
                  <div class="flex items-center mb-4">
                    <div className="w-[16rem]">
                            <label
                        for="website-admin"
                        class="text-sm font-medium text-white mr-2"
                    >
                        Postal Code
                    </label>        
                    </div>

                    <div class="flex w-full">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-zinc-600 rounded-l-md">
                        <TbMailbox size={20} color="gray" />
                        </span>
                        <input
                        type="number"
                        id="website-admin"
                        class="rounded-none rounded-r-lg border border-zinc-600 text-white bg-zinc-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full h-[3.7rem] text-sm p-2.5"
                        placeholder="Enter postal code" 

                        />
                    </div>
                </div>
                {/* //---- endof ----// */}  

            </div>
        </div>
    )

    return {address1, address2, city, 
            province, postalCode, country, 
            jsxStaffFormTwo}

}; 

export default StaffFormTwo; 
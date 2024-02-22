import React from 'react'

const DropdownButton = () => {
  return (
    <div>
<select id="Provinces" class="bg-gray-50 border border-teal-600 text-sm font-medium h-14 leading-none text-gray-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full">
  <option selected>Choose a province</option>
  <option value="EC">Eastern Cape</option>
        <option value="FS">Free State</option>
        <option value="GP">Gauteng</option>
        <option value="KZN">KwaZulu-Natal</option>
        <option value="LP">Limpopo</option>
        <option value="MP">Mpumalanga</option>
        <option value="NC">Northern Cape</option>
        <option value="NW">North West</option>
        <option value="WC">Western Cape</option>
</select>

    </div>
  )
}

export default DropdownButton
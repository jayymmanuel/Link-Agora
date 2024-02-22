import React from 'react'

export const Stats = ({stat1, value1, stat2, value2, stat3, value3, stat4, value4}) => {
    return (
      <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-36 lg:py-10">
        
        <div class="grid grid-cols-2 row-gap-4 md:grid-cols-4">

          <div class="text-center md:border-r">
            <h6 class="text-lg font-bold lg:text-xl xl:text-2xl">{value1}</h6>
            <p class="text-md font-medium tracking-widest text-gray-800 uppercase lg:text-sm">
              {stat1}
            </p>
          </div>
          <div class="text-center md:border-r">
            <h6 class="text-lg font-bold lg:text-xl xl:text-2xl">{value2}</h6>
            <p class="text-md font-medium tracking-widest text-gray-800 uppercase lg:text-sm">
              {stat2}
            </p>
          </div>
          <div class="text-center md:border-r">
            <h6 class="text-lg font-bold lg:text-xl xl:text-2xl">{value3}</h6>
            <p class="text-md font-medium tracking-widest text-gray-800 uppercase lg:text-sm">
              {stat3}
            </p>
          </div>
          <div class="text-center">
            <h6 class="text-lg font-bold lg:text-xl xl:text-2xl">{value4}</h6>
            <p class="text-md font-medium tracking-widest text-gray-800 uppercase lg:text-sm">
              {stat4}
            </p>
          </div>
        </div>
      </div>
    );
  };
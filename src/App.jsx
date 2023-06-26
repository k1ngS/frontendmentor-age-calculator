import { MdKeyboardArrowDown } from 'react-icons/md'

export const App = () => {
  return (
    <div className="flex min-h-screen items-center bg-neutral-offBlack">
      <div className="flex justify-center items-center w-[1200px] h-[720px] mx-auto bg-neutral-lightGrey">

        <div className="grid grid-cols-3 w-6/12 bg-neutral-white rounded-2xl p-10">
          <div className="col-span-2">
            {/* Conteúdo da parte de cima */}
            <div className='flex flex-row gap-4'>
              <div>
                <label htmlFor="" className="block text-sm font-semibold leading-6">
                  DAY
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className='block bg-white font-bold w-full rounded-md ring-inset ring-1
                    border-none outline-none py-2 px-6 shadow-sm
                    focus:ring-2 focus:ring-inset focus:ring-primary-purple
                    sm:leading-6 cursor-pointer
                    '
                  />
                </div>
              </div>

              <div>
                <label htmlFor="" className="block text-sm font-semibold leading-6">
                  MONTH
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className='block bg-white font-bold w-full rounded-md ring-inset ring-1
                    border-none outline-none py-2 px-6 shadow-sm
                    focus:ring-2 focus:ring-inset focus:ring-primary-purple
                    sm:leading-6 cursor-pointer
                    '
                  />
                </div>
              </div>

              <div>
                <label htmlFor="" className="block text-sm font-semibold leading-6">
                  YEAR
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className='block bg-white font-bold w-full rounded-md ring-inset ring-1
                    border-none outline-none py-2 px-6 shadow-sm
                    focus:ring-2 focus:ring-inset focus:ring-primary-purple
                    sm:leading-6 cursor-pointer
                    '
                  />
                </div>
              </div>

            </div>
            <div className="col-span-3 border-b my-4 border-neutral-lightGrey" />
            {/* Conteúdo da parte de baixo */}
            <div className='flex flex-col gap-4 font-extrabold italic text-7xl'>
              <div className='flex'><p className='text-primary-purple mr-4'>38</p> years</div>
              <div className='flex'><p className='text-primary-purple mr-4'>3</p> months</div>
              <div className='flex'><p className='text-primary-purple mr-4'>26</p> days</div>
            </div>
          </div>
          <div className="flex flex-col items-end my-20">
            {/* Botão na parte do meio */}
            <button className="bg-neutral-offBlack w-24 h-24 my-1 rounded-full">
              <MdKeyboardArrowDown className='text-neutral-white w-full h-full' />
            </button>
          </div>
        </div>

      </div>
    </div >
  )
}

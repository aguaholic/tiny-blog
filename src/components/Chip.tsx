interface ChipProps {
  text: string,
  genreChip?: boolean,
}

const Chip = ({ text, genreChip }: ChipProps) => {
  return (
    <div
      className='flex flex-wrap justify-center space-x-2'
    >
      {genreChip ?
        <span
          className='px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease'>
          {text}
        </span>
        :
        <span className='block max-w-sm px-3 py-1 bg-white border border-gray-200 rounded-lg'>
          {text}
        </span>
      }
    </div>
  )
};

export default Chip;

import StarIcon from '@mui/icons-material/Star'; 

const Product = () => {
  return (
    <div className='flex flex-col items-center justify-end m-[10px] p-[20px] w-full max-h-[400px] min-w-[100px] bg-white z-10'>
        <div className='h-[100px] mb-[15px]'>
            <p>The lead startup</p>
            <p className='mt-[5px]'>
                <small>$</small>
                <strong>19.99</strong>
            </p>
              <div>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
            </div>
        </div>

        <img className='max-h-[200px] w-full object-contain mb-[15px]' src="https://m.media-amazon.com/images/I/61BFOf9Ap-L._AC_UF1000,1000_QL80_.jpg" />

        <button className='bg-[#f0c14b] border border-solid mt-[10px] text-[#111]' style={{ borderColor: '#a88734 #9c7e31 #846a29'}}>Add to Cart</button>
    </div>
  )
}

export default Product;
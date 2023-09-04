interface HeadingProps {
  title: string
  subtitle: string
}
const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className='md:px-4 text-center space-y-2'>
      <h2 className='text-4xl lg:text-5xl font-black capitalize'>{title}</h2>
      <p className='text-slate-300 font-medium text-lg capitalize'>{subtitle}</p>
    </div>
  )
}

export default Heading

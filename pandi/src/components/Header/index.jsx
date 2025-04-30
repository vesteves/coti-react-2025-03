import MenuRight from '@/components/MenuRight'

export const Header = () => {
  const menu = ['Meninas', 'Meninos', 'Bebês', 'Destaque']

  return <nav className="h-16 bg-red-600 flex justify-between items-center px-10 mb-10">
    <div>Logo</div>
    <div>
      <ul className='flex gap-3'>
        {menu.map(item => <li key={item} className='cursor-pointer'>{item}</li>)}
      </ul>
    </div>
    <div><MenuRight /></div>
  </nav>
}

export default Header
const Tag = ({label, active}) => {
  return (
    <p className={`${active ? 'active': 'tag'}`}>
      {label}
    </p>
  )
}

const Tags = () => {
  return (
    <div className='tags'>
    <Tag label={'Программирование'}/>
    <Tag label={'Все курсы'} active={true}/>
    <Tag label={'Дизайн'}/>
    <Tag label={'Аналитика'}/>
    <Tag label={'Маркетинг'}/>
    <Tag label={'Финансы'}/>
    <Tag label={'Игры'}/>
    <Tag label={'Школа дронов'}/>
    <Tag label={'Хобби и увлечения'}/>
    <Tag label={'Обычный тег'}/>
    <Tag label={'Обычный тег'}/>
    <Tag label={'Обычный тег'}/>
    <Tag label={'Обычный тег'}/>
  </div>
  )
}


export default Tags

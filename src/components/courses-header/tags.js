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
    <Tag label={'Обычный тег'}/>
    <Tag label={'Активный тег'} active={true}/>
    <Tag label={'Обычный тег'}/>
    <Tag label={'Обычный тег'}/>
    <Tag label={'Обычный тег'}/>
    <Tag label={'Обычный тег'}/>
    <Tag label={'Обычный тег'}/>
    <Tag label={'Обычный тег'}/>
    <Tag label={'Обычный тег'}/>
    <Tag label={'Обычный тег'}/>
    <Tag label={'Обычный тег'}/>
    <Tag label={'Обычный тег'}/>
    <Tag label={'Обычный тег'}/>
  </div>
  )
}


export default Tags

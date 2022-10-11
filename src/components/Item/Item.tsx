import React from 'react';
import Button from '../Button/Button';
import './Item.css';

function Item({ type, className, onAdd }: any) {
  
  const onAddHandler = () => {
    onAdd(type);
  }

  return (
    <div className={'type ' + className}>
      <div className={'img'} />
      <div className={'title'}>{type.title}</div>
      <div className={'description'}>{type.description}</div>
      <Button className={'add-btn'} onClick={onAddHandler}>Call</Button>
    </div>
  )
}

export default Item
import React, { useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Item from '../Item/Item';
import './List.css';

const types = [
  { id: 1, title: 'alien', description: 'alien' },
  { id: 2, title: 'androids', description: ' working joe androids' },
  { id: 3, title: 'human', description: 'human enemies' },
  { id: 4, title: 'facehugger', description: 'facehugger alien'}
]

function List() {
  const [ addedItems, setAddedItems ] = useState([]);
  const { tg } = useTelegram();

  const onAdd = (type: any) => {
    const added = addedItems.find((item: any) => item.id === type.id);
    let newItems: any = [];

    if(added) {
      newItems = addedItems.filter((item: any) => item.id !== type.id);
    } else {
      newItems = [...addedItems, type];
    }

    setAddedItems(newItems);

    if(newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: 'Call'
      });
    }
  }

  return (
    <div className={'list'}>
      {types.map((item: any) => (
        <Item 
          type={item}
          onAdd={onAdd}
          className={'item'}
        />
      ))}
    </div>
  )
}

export default List
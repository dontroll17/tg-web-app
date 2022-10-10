import React, { useEffect, useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';

function Form() {
  const [ deck, setDeck ] = useState('');
  const [ berth, setBerth ] = useState('');
  const [ subject, setSubject ] = useState('');
  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'send data'
    })
  }, []);

  useEffect(() => {
    if(!deck || !berth) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  })

  const onChangeDeck = (e: any) => {
    setDeck(e.target.value);
  }

  const onChangeBerth = (e: any) => {
    setBerth(e.target.value);
  }
  const onChangeSubject = (e: any) => {
    setSubject(e.target.value);
  }

  return (
    <div className={'form'}>
      <h3>Data form</h3>
      <input 
        type="text"
        className={'input'}
        placeholder={'deck'}
        value={deck}
        onChange={onChangeDeck}
      />

      <input 
        type="text"
        className={'input'}
        placeholder={'berth'}
        value={berth}
        onChange={onChangeBerth}
      />

      <select className={'select'} value={subject} onChange={onChangeSubject}>
        <option value={'crew'}>Crew</option>
        <option value={'camper'}>Сamper</option>
      </select>
    </div>
  )
}

export default Form
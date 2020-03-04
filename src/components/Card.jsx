import React from 'react';
import Count from './Count';
import Buttons from './Buttons';
import imageStore from '../store/ImageStore';
import { useObserver } from 'mobx-react';

export default function Card() {
  return useObserver(() => (
    <div className="card">
      <img src={imageStore.imageUrl} className="card-img-top" alt="..." />

      <Count />
      <div className="card-body">
        <Buttons />
      </div>
    </div>
  ));
}

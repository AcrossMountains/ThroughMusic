import Meta from '@/components/Meta';
import { useEffect, useState } from 'react';
import {
  SwipeContainer,
  SwipeItem,
  SwipeItemWrap,
  SwipeDotWrap,
  SwipeDotItem,
  ArrowContainer,
  Arrow,
} from './styled';

//轮播组件
function FirstPage() {
  const [index, setIndex] = useState(0);
  const swipeList = [
    'https://img0.baidu.com/it/u=530426417,2082848644&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    'https://img1.baidu.com/it/u=700675537,3936578503&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    'https://img0.baidu.com/it/u=3798217922,3880088897&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
    'https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500',
  ];

  const getIndex = (pos: 'left' | 'right') => {
    if (pos === 'left') {
      return index - 1 < 0 ? swipeList.length - 1 : index - 1;
    } else {
      return index + 1 > swipeList.length - 1 ? 0 : index + 1;
    }
  };

  const preSwipe = () => {
    setIndex(getIndex('left'));
  };

  const nextSwipe = () => {
    setIndex(getIndex('right'));
  };

  const mouseEnter = (idx: number) => {
    setIndex(idx);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSwipe();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <Meta title="test" />
      <div>
        <SwipeContainer>
          {
            ['left','right'].map((item ,index)=> (
             <ArrowContainer className= {item} onClick={item === 'right' ? preSwipe : nextSwipe} key = {index}>
              <Arrow className = {item}></Arrow>
            </ArrowContainer>
            )
          }
          <SwipeItemWrap>
            {swipeList.map((item, idx) => (
              <SwipeItem
                key={idx}
                className={`${
                  idx === index
                    ? 'center'
                    : getIndex('right') === idx
                    ? 'right'
                    : getIndex('left') === idx
                    ? 'left'
                    : ''
                }`}
              >
                <img src={item} />
              </SwipeItem>
            ))}
          </SwipeItemWrap>
          <SwipeDotWrap>
            {swipeList.map((_, idx) => (
              <SwipeDotItem
                onMouseEnter={() => mouseEnter(idx)}
                className={`${index === idx ? 'active' : ''}`}
                key={idx}
              />
            ))}
          </SwipeDotWrap>
        </SwipeContainer>
      </div>
    </>
  );
}

export default FirstPage;

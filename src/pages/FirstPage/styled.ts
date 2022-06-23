import { styled } from '@mui/system';

//整个盒子
const SwipeContainer = styled('div')({
  backgroundColor: 'skyblue',
  width: '700px',
  height: '350px',
  overflow: 'hidden',
  position: 'relative',
  margin: '0 auto',
});

//包裹轮播列表的样式
const SwipeItemWrap = styled('ul')({
  display: 'flex',
  padding: '40px 0',
  margin: '0',
});

//轮播图列表
const SwipeItem = styled('li')({
  backgroundColor: 'orange',
  listStyle: 'none',
  width: '300px',
  height: '200px',
  flexShrink: '0',
  transition: 'all 0.5s ease-in-out',
  position: 'absolute',
  left: '28.5%',
  zIndex: '-1',
  img: {
    width: '100%',
    height: '100%',
  },
  '&.left': {
    zIndex: '1',
    transform: 'scale(1)translateX(-50%)',
  },
  '&.right': {
    zIndex: '2',
    transform: 'scale(1) translateX(50%)',
  },
  '&.center': {
    zIndex: '3',
    transform: 'scale(1.2) translateX(0)',
  },
});

//包裹轮播图下面的点点标识
const SwipeDotWrap = styled('ul')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: '20px',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: 0,
});

//轮播图下面的点点标识
const SwipeDotItem = styled('ul')(({ theme }) => ({
  backgroundColor: '#e5e5e5',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  flexShrink: '0',
  padding: '0',
  '&.active': {
    backgroundColor: theme.palette.primary.main,
    transition: 'all 0.5s ease-in-out',
  },
}));

//左右箭头按钮
const ArrowContainer = styled('div')({
  width: '40px',
  height: '60px',
  position: 'absolute',
  backgroundColor: 'transparent',
  top: '35%',
  '&:hover': {
    backgroundColor: '#c0c0c0',
    background: 'rgba(0, 0, 0, .1)',
  },
  '&.left': {
    left: '0',
  },
  '&.right': {
    right: '0',
  },
});

const Arrow = styled('div')({
  position: 'relative',
  top: '27%',
  width: '20px',
  height: '20px',
  borderTop: '3px solid #fff',
  borderRight: '3px solid #fff',
  '&.left': {
    left: '10px',
    transform: 'rotate(-135deg)',
  },
  '&.right': {
    right: '-10px',
    transform: 'rotate(45deg)',
  },
});

export {
  SwipeContainer,
  SwipeItemWrap,
  SwipeItem,
  SwipeDotWrap,
  SwipeDotItem,
  ArrowContainer,
  Arrow,
};
